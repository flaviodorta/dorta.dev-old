import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useToggle } from '../hooks/useToggle';
import { useRecoilState } from 'recoil';
import { randomIntegerInterval } from '../helpers/functions';
import { cursorVariantAtom, transitionAtom } from '../recoil/atoms';
import {
  introTransitionLayerLoadingToButton,
  introEnterButtonText,
  introLoadingBar,
  introLogoVariant,
} from '../helpers/variants';

import Link from 'next/link';
import { Logo } from './Logo';
import { transitionActions } from '../recoil/actions';

export const Intro = () => {
  const [width, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useToggle(true);
  const [isEnterButtonAnimationStart, setIsEnterButtonAnimationStart] =
    useState(false);
  const [isEnterButtonAnimationComplete, setIsEnterButtonAnimationComplete] =
    useState(false);
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);
  const [__, setTransitionState] = useRecoilState(transitionAtom);
  // const [___, setShouldStartBackgroundSound] = useRecoilState(
  //   shouldStartBackgroundSoundAtom
  // );

  const onClickEnterButton = () => {
    setTimeout(
      () => setTransitionState(transitionActions.startTransition()),
      100
    );
  };

  const delay = randomIntegerInterval(80, 30);

  const onMouseEnterEnterButton = () =>
    isEnterButtonAnimationComplete ? setCursorVariant('homeMenuOption') : {};
  const onMouseLeaveEnterButton = () =>
    isEnterButtonAnimationComplete ? setCursorVariant('default') : {};

  // loading effect
  useEffect(() => {
    let timer;
    console.log(width);
    if (width < 100) {
      timer = setTimeout(() => setWidth((width) => width + 1), delay);
    }
    if (width === 100) {
      timer = setTimeout(() => {
        setIsLoading();
        console.log('is loading: ', isLoading);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [width]);

  return (
    <AnimatePresence>
      <div className='h-full w-full flex items-center justify-center'>
        <div className='relative bottom-16 flex flex-col items-center justify-between gap-16'>
          <Logo className='' />
          <div
            className={`relative w-[100px] h-[18px] flex items-center bg-none justify-start border-primary border-[1px] outline-none select-none`}
          >
            <motion.div
              variants={introLoadingBar(width)}
              animate='animate'
              exit='exit'
              className='h-[18px] bg-primary relative outline-offset-4'
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 8 }}
                className='absolute font-share-tech top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs flex items-center'
              >
                <span className='relative top-[1px]'>{width}%</span>
              </motion.span>
            </motion.div>

            <motion.div
              variants={introTransitionLayerLoadingToButton}
              initial='initial'
              animate={isLoading ? '' : 'animate'}
              onAnimationComplete={() => setIsEnterButtonAnimationStart(true)}
              className='absolute h-[30px] -left-1 bg-layout-2 font-share-tech uppercase flex items-center justify-center'
            >
              {isEnterButtonAnimationStart && (
                <Link href='/home'>
                  <motion.div
                    variants={introEnterButtonText}
                    initial='initial'
                    animate={isLoading ? '' : 'animate'}
                    whileTap='whileTap'
                    onAnimationComplete={() =>
                      setIsEnterButtonAnimationComplete(true)
                    }
                    onClick={onClickEnterButton}
                    onMouseEnter={onMouseEnterEnterButton}
                    onHoverStart={onMouseEnterEnterButton}
                    onMouseLeave={onMouseLeaveEnterButton}
                    className='text-primary hover:text-white hover:bg-primary duration-200 transition-colors ease-linear w-[100px] h-7 flex items-center justify-center'
                  >
                    <span className='relative top-[1px]'>Enter</span>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useToggle } from '../hooks/useToggle';
import { useRecoilState } from 'recoil';
import { randomIntegerInterval } from '../helpers/functions';
import { cursorVariantAtom } from '../recoil/atoms';
import {
  introTransitionLayerLoadingToButton,
  introEnterButtonText,
  introLoadingBar,
  introLogoVariant,
} from '../helpers/variants';

import Image from 'next/image';
import Logo from '../../public/logo.svg';

export const Intro = () => {
  const [width, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useToggle(true);
  const [isEnterBurronAnimationStart, setIsEnterButtonAnimationStart] =
    useState(false);
  const [isEnterBurronAnimationComplete, setIsEnterButtonAnimationComplete] =
    useState(false);
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);

  const delay = randomIntegerInterval(80, 30);

  const onMouseEnterEnterButton = () =>
    isEnterBurronAnimationComplete ? setCursorVariant('homeMenuOption') : {};
  const onMouseLeaveEnterButton = () =>
    isEnterBurronAnimationComplete ? setCursorVariant('default') : {};

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
    // if (isEnterBurronAnimationStart) {
    //   timer = setTimeout(() => {
    //     dispatch({
    //       type: 'SET_FUNCTION_ENTER_BUTTON',
    //       payload: {
    //         onEnter: () => setCursorVariant('homeMenuOption'),
    //         onLeave: () => setCursorVariant('default'),
    //       },
    //     });
    //   }, 1600);
    // }

    return () => {
      clearTimeout(timer);
    };
  }, [width]);

  return (
    <AnimatePresence>
      <div className='h-full w-full flex flex-col space-y-4 -translate-y-6 -translate-x-1 md:-translate-y-20 md:-translate-x-6 items-center justify-center'>
        <motion.div
          variants={introLogoVariant}
          initial='initial'
          animate='animate'
          className='relative select-none w-[120px] h-[30px] md:w-[200px] md:h-[80px]'
        >
          <Image
            src={Logo}
            className='h-full w-[120px] sm:h-64'
            layout='fill'
            alt='Logo'
          />
        </motion.div>
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
              className='absolute font-share-tech top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs'
            >
              {width}%
            </motion.span>
          </motion.div>

          <motion.div
            variants={introTransitionLayerLoadingToButton}
            initial='initial'
            animate={isLoading ? '' : 'animate'}
            onAnimationComplete={() => setIsEnterButtonAnimationStart(true)}
            className='absolute h-[18px] -left-1 bg-layout-2 font-share-tech uppercase flex items-center justify-center'
          >
            {isEnterBurronAnimationStart && (
              <motion.span
                variants={introEnterButtonText}
                initial='initial'
                animate={isLoading ? '' : 'animate'}
                whileTap='whileTap'
                onAnimationComplete={() =>
                  setIsEnterButtonAnimationComplete(true)
                }
                onMouseEnter={onMouseEnterEnterButton}
                onMouseLeave={onMouseLeaveEnterButton}
                className='text-primary hover:text-white hover:bg-primary duration-200 transition-colors ease-linear w-[100px] h-7 flex items-center justify-center'
              >
                Enter
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

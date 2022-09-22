import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { useRecoilState } from 'recoil';
import useSound from 'use-sound';
import {
  optionVariants,
  transitionFirstBackgroundVariants,
  transitionSecondBackgroundVariants,
} from '../helpers/variants';
import { transitionActions } from '../recoil/actions';
import { lastUrlAtom, transitionAtom } from '../recoil/atoms';
import { Logo } from './Logo';

export const TransitionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [
    { isTransitioning, shouldRenderBg, shouldRenderPage },
    setTransitionState,
  ] = useRecoilState(transitionAtom);

  const isTransitionPageToPage = useRef(false);

  // const [onAnimationStartTransitionSound] = useSound(
  //   '/sounds/page-transition-enter.wav'
  // );
  const [onAnimationExitTransitionSound] = useSound(
    '/sounds/page-transition-exit.mp3'
  );

  const { pathname } = useRouter();

  useEffect(() => {
    let timer;
    const transitionDelay = isTransitionPageToPage.current ? 1950 : 3500;

    if (isTransitioning && shouldRenderBg)
      timer = setTimeout(
        () => setTransitionState(transitionActions.exitTransition()),
        transitionDelay
      );

    if (!isTransitioning && shouldRenderBg)
      timer = setTimeout(
        () => setTransitionState(transitionActions.shouldRenderPage()),
        1400
      );

    return () => {
      clearTimeout(timer);
    };
  }, [isTransitioning, shouldRenderBg]);

  if (pathname !== '/' && (isTransitioning || shouldRenderBg)) {
    return (
      <div className='w-screen h-screen relative'>
        <AnimatePresence>
          {isTransitioning && (
            <>
              <motion.div
                className='bg-layout-2 absolute flex justify-center items-center h-full z-50 left-0 right-0 overflow-hidden'
                variants={transitionFirstBackgroundVariants(
                  isTransitionPageToPage.current
                )}
                initial='initial'
                animate='animate'
                exit='exit'
                onAnimationStart={() => onAnimationExitTransitionSound()}
                onAnimationEnd={() => onAnimationExitTransitionSound()}
              >
                {isTransitionPageToPage.current ? (
                  <motion.h1
                    variants={optionVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='font-anton text-7xl md:text-9xl uppercase absolute'
                  >
                    {pathname.substring(1)}
                    <span className='text-primary'>.</span>
                  </motion.h1>
                ) : (
                  <Logo className='-translate-y-6 xl:-translate-x-12 xl:-translate-y-20 2xl:-translate-x-16 2xl:-translate-y-20' />
                )}
              </motion.div>
              <motion.div
                className='bg-primary absolute w-screen z-40 left-0 right-0'
                variants={transitionSecondBackgroundVariants(
                  isTransitionPageToPage.current
                )}
                initial='initial'
                animate='animate'
                exit='exit'
                // onAnimationComplete={() => {
                //   onAnimationExitTransitionSound();
                // }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (pathname === '/' || shouldRenderPage) {
    isTransitionPageToPage.current = true;

    return <div className='w-full h-full'>{children}</div>;
  }
};

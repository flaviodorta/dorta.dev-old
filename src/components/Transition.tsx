import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useEffect, useReducer, useState } from 'react';
import useSound from 'use-sound';

export const transitionFirstBackgroundVariants: Variants = {
  initial: {
    bottom: 0,
    height: 0,
  },
  animate: {
    bottom: 0,
    height: '100vh',
    transition: {
      type: 'spring',
      bounce: 0,
      delay: 0.22,
    },
  },
  exit: {
    top: 0,
    height: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      delay: 0.15,
    },
  },
};

export const transitionSecondBackgroundVariants: Variants = {
  initial: {
    bottom: 0,
    height: 0,
  },
  animate: {
    bottom: 0,
    height: '100vh',
    transition: {
      type: 'spring',
      bounce: 0,
      delay: 0.15,
    },
  },
  exit: {
    top: 0,
    height: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      delay: 0.22,
    },
  },
};

export const TransitionPageToPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [{ isTransitioning, shouldRenderBg, shouldRenderPage }, dispatch] =
    useReducer(reducer, {
      isTransitioning: true,
      shouldRenderBg: true,
      shouldRenderPage: false,
    });

  const [onAnimationStartTransitionSound] = useSound(
    '/sounds/page-transition-enter'
  );
  const [onAnimationExitTransitionSound] = useSound(
    '/sounds/page-transition-exit'
  );

  useEffect(() => {
    let timer;

    if (isTransitioning && shouldRenderBg)
      timer = setTimeout(() => dispatch({ type: 'TRANSITION_EXIT' }), 3000);

    if (!isTransitioning && shouldRenderBg)
      timer = setTimeout(() => dispatch({ type: 'SHOULD_RENDER_PAGE' }), 1400);

    return () => {
      clearTimeout(timer);
    };
  }, [isTransitioning, shouldRenderBg]);

  const optionVariants: Variants = {
    initial: {
      y: 100,
    },
    animate: {
      y: -50,
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
    exit: {
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
  };

  if (isTransitioning || shouldRenderBg) {
    return (
      <div className='w-full h-full relative'>
        <AnimatePresence>
          {isTransitioning && (
            <>
              <motion.div
                className='bg-layout-2 absolute flex justify-center items-center w-screen h-full z-50 left-0 overflow-hidden'
                variants={transitionFirstBackgroundVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                onAnimationStart={() => onAnimationStartTransitionSound()}
                onAnimationComplete={() => onAnimationExitTransitionSound()}
              >
                <motion.h1
                  variants={optionVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className='font-anton text-9xl uppercase absolute'
                >
                  Motion<span className='text-primary'>.</span>
                </motion.h1>
              </motion.div>
              <motion.div
                className='bg-primary absolute w-screen h-full z-40 left-0'
                variants={transitionSecondBackgroundVariants}
                initial='initial'
                animate='animate'
                exit='exit'
              />
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (shouldRenderPage) {
    return <div className='w-full h-full'>{children}</div>;
  }
};

export type State = {
  isTransitioning: boolean;
  shouldRenderBg: boolean;
  shouldRenderPage: boolean;
};

export type Action =
  | { type: 'TRANSITION_EXIT' }
  | { type: 'SHOULD_RENDER_PAGE' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TRANSITION_EXIT':
      return {
        isTransitioning: false,
        shouldRenderBg: true,
        shouldRenderPage: false,
      };
    case 'SHOULD_RENDER_PAGE':
      return {
        isTransitioning: false,
        shouldRenderBg: false,
        shouldRenderPage: true,
      };
    default:
      return state;
  }
}

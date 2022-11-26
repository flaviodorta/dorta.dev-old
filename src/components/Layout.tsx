import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import {
  cursorVariantAtom,
  // shouldStartBackgroundSoundAtom,
} from '../recoil/atoms';
import {
  cursorStyleVariants,
  cursorVariants,
  MousePosition,
} from '../helpers/variants';
import { isMobile } from 'react-device-detect';
import { TransitionLayout } from './Transition';
import { useSoundsContext } from '../context/SoundsContext';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useRecoilState(cursorVariantAtom);

  // const [shouldStartBackgroundSound] = useRecoilState(
  //   shouldStartBackgroundSoundAtom
  // );

  // const { backgroundSoundPlay } = useSoundsContext();

  // if (shouldStartBackgroundSound) backgroundSoundPlay();

  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);
  }, []);

  return (
    <div className='text-white bg-layout-2'>
      <TransitionLayout>
        <div
          ref={layoutRef}
          onMouseEnter={() => setCursorVariant('default')}
          className='cursor-none max-h-full h-screen  overflow-hidden'
        >
          {/* cursor movement */}
          <motion.div
            variants={cursorVariants(mousePosition)}
            animate='default'
            custom={cursorVariant}
            transition={{
              type: 'spring',
              mass: 0.1,
              stiffness: 400,
              bounce: 0.05,
            }}
            whileTap={{ scale: 0.5 }}
            className={`z-[1000] h-fit w-fit rounded-[50%] pointer-events-none fixed top-0 left-0 ${
              isMobile ? 'hidden' : 'block'
            }`}
          >
            {/* cursor styles */}
            <motion.div
              variants={cursorStyleVariants}
              animate={cursorVariant}
              className={`-translate-x-1/2 -translate-y-1/2  rounded-[50%] pointer-events-none fixed top-0 left-0 hidden ${
                isMobile ? 'hidden' : 'block'
              }`}
            />
          </motion.div>

          {/* all sites components */}
          {children}
        </div>
      </TransitionLayout>
    </div>
  );
};

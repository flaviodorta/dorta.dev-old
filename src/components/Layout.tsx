import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom } from '../recoil/atoms';
import {
  cursorStyleVariants,
  cursorVariants,
  MousePosition,
} from '../helpers/variants';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useRecoilState(cursorVariantAtom);

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
    // layout all site
    <div
      ref={layoutRef}
      onMouseEnter={() => setCursorVariant('default')}
      className='bg-layout-2 cursor-none flex flex-col justify-between max-h-full h-screen text-white px-5  pb-4 md:px-6 md:pb-10 overflow-hidden'
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
        className='z-[1000] h-fit w-fit rounded-[50%] pointer-events-none fixed top-0 left-0 hidden md:block'
      >
        {/* cursor styles */}
        <motion.div
          variants={cursorStyleVariants}
          animate={cursorVariant}
          className='-translate-x-1/2 -translate-y-1/2  rounded-[50%] pointer-events-none fixed top-0 left-0 hidden md:block'
        />
      </motion.div>

      {/* all sites components */}
      {children}
    </div>
  );
};
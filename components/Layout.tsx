import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState('default');

  const cursorVariants: Variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      border: 'none',
    },
    text: {
      height: 48,
      width: 48,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      mixBlendMode: 'lighten',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

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
    <div className='bg-layout-2 cursor-none flex flex-col justify-between max-h-full h-screen text-white px-5  pb-4 md:px-6 md:pb-10 overflow-hidden'>
      <motion.div
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 400,
          bounce: 0.05,
        }}
        className='bg-primary z-50 h-2 w-2 rounded-[50%] pointer-events-none fixed top-0 left-0 hidden md:block'
      />
      {children}
    </div>
  );
};

export default Layout;

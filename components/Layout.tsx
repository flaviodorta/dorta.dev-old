import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom, CursorVariants } from '../recoil/atoms';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useRecoilState(cursorVariantAtom);

  const cursorVariants: Variants = {
    default: (variant: CursorVariants) => {
      const props = {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        border: 'none',
      };

      if (variant === 'homeHeading' || variant === 'homeTypewriter') {
        return {
          ...props,
          mixBlendMode: 'darken',
        };
      }

      if (variant === 'homeSocialIcon') {
      }

      return props;
    },
  };

  const cursorStyleVariants: Variants = {
    default: {
      width: 8,
      height: 8,
      border: 'none',
      transition: {
        type: 'tween',
        duration: 0.25,
        ease: [0.92, 0.96, 0.98, 0.94],
      },
    },
    clicked: {
      width: 32,
      height: 32,
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [1.5, 1.6, 1.4, 0.97],
      },
    },
    homeHeading: {
      width: 8 * 14,
      height: 8 * 14,
      transition: {
        type: 'tween',
        duration: 0.15,
        ease: [1.5, 1.6, 1.4, 0.97],
      },
    },
    homeSocialIcon: {
      width: [8 * 4, 10 * 4, 8 * 4],
      height: [8 * 4, 10 * 4, 8 * 4],
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [1.5, 1.6, 1.4, 0.97],
        repeat: Infinity,
      },
    },
    homeTypewriter: {
      width: 32,
      height: 32,
      transition: {
        type: 'tween',
        duration: 0.15,
        ease: [1.5, 1.6, 1.4, 0.97],
      },
    },
    homeMenuIcon: {
      width: [8 * 7, 8 * 8, 8 * 7],
      height: [8 * 7, 8 * 8, 8 * 7],
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [1.5, 1.6, 1.4, 0.97],
        repeat: Infinity,
      },
    },
    homeSoundIcon: {
      width: [8 * 6, 8 * 7, 8 * 6],
      height: [8 * 6, 8 * 7, 8 * 6],
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [1.5, 1.6, 1.4, 0.97],
        repeat: Infinity,
      },
    },
    homeOpenSocialIconsIcon: {
      width: [8 * 6, 8 * 7, 8 * 6],
      height: [8 * 6, 8 * 7, 8 * 6],
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [1.5, 1.6, 1.4, 0.97],
        repeat: Infinity,
      },
    },
    homeLogo: {
      width: [8 * 6, 8 * 7, 8 * 6],
      height: [8 * 6, 8 * 7, 8 * 6],
      border: '2px solid rgb(237 12 50)',
      background: 'transparent',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [1.5, 1.6, 1.4, 0.97],
        repeat: Infinity,
      },
    },
    homeMenuOption: {
      width: 8,
      height: 8,
      border: 'none',
      background: 'white',
      transition: {
        type: 'tween',
        duration: 0.25,
        ease: [0.92, 0.96, 0.98, 0.94],
      },
    },
  };

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
    <div className='bg-layout-2 cursor-none flex flex-col justify-between max-h-full h-screen text-white px-5  pb-4 md:px-6 md:pb-10 overflow-hidden'>
      {/* cursor movement */}
      <motion.div
        variants={cursorVariants}
        animate='default'
        custom={cursorVariant}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 400,
          bounce: 0.05,
        }}
        whileTap={{ scale: 0.5 }}
        className='z-[100] h-fit w-fit rounded-[50%] pointer-events-none fixed top-0 left-0 hidden md:block'
      >
        {/* cursor styles */}
        <motion.div
          variants={cursorStyleVariants}
          animate={cursorVariant}
          className='bg-primary -translate-x-1/2 -translate-y-1/2  rounded-[50%] pointer-events-none fixed top-0 left-0 hidden md:block'
        />
      </motion.div>
      {/* all sites components */}
      {children}
    </div>
  );
};

export default Layout;

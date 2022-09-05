import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import { motion, Variants } from 'framer-motion';

const sidebarVariants: Variants = {
  open: {
    clipPath: 'circle(1000px at 18px 18px)',
    transition: {
      duration: 0.7,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  close: {
    clipPath: 'circle(30px at 18px 18px)',
    transition: {
      duration: 0.7,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const barOneVariants: Variants = {
  initial: {
    rotate: 0,
    bottom: 5,
    left: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      type: 'tween',
    },
    position: 'absolute',
    translateX: '-100%',
    height: 4,
    width: 45,
    background: 'white',
  },
  rotated: {
    rotate: '45deg',
    bottom: 0,
    left: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      type: 'tween',
    },
    position: 'absolute',
    translateX: '-100%',
    height: 4,
    width: 45,
    background: 'white',
  },
};

const barTwoVariants: Variants = {
  initial: {
    rotate: 0,
    bottom: -5,
    left: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      type: 'tween',
    },
    position: 'absolute',
    translateX: '-100%',
    width: 35,
    height: 4,
    background: 'white',
  },
  rotated: {
    rotate: '-45deg',
    bottom: 0,
    left: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      type: 'tween',
    },
    position: 'absolute',
    translateX: '-100%',
    width: 45,
    height: 4,
    background: 'white',
  },
};

export const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <nav className='flex justify-between items-center text-white w-full'>
      <div className='relative select-none w-[120px] h-[30px] md:w-[160px] md:h-[40px]'>
        <Image
          src={Logo}
          className='h-full w-[120px] sm:h-64'
          layout='fill'
          alt='Logo'
        />
      </div>

      <div
        className='relative z-50 flex items-center justify-end w-[50px] h-[40px] cursor-pointer'
        onClick={toggleMenu}
      >
        <div className='relative'>
          <motion.span
            variants={barOneVariants}
            initial={false}
            animate={isMenuOpen ? 'rotated' : 'initial'}
          ></motion.span>
          <motion.span
            variants={barTwoVariants}
            initial={false}
            animate={isMenuOpen ? 'rotated' : 'initial'}
          ></motion.span>
        </div>
      </div>

      {/* nav */}
      {/* <div className='absolute overflow-hidden bg-layout-2 w-96 top-0 right-0 bottom-0'>
        <motion.div
          initial={false}
          variants={sidebarVariants}
          animate={isMenuOpen ? 'open' : 'close'}
          className='absolute w-12 h-12 -top-[24px] -right-[24px] rounded-full bg-layout'
        ></motion.div>
      </div> */}
    </nav>
  );
};

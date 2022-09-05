import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import { motion } from 'framer-motion';

const barOneVariants = {
  initial: {
    width: '45px',
  },
  visible: {
    width: 0,
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 0.05,
      origin: 0,
    },
  },
};

const barTwoVariants = {
  visible: {
    width: [],
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 0.15,
      delay: 0.05,
    },
  },
};

export const Navbar = () => {
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
        className='flex items-center justify-end w-[50px] h-[40px] cursor-pointer'
        onClick={toggleMenu}
      >
        <div className='relative'>
          <span
            className={`absolute -translate-x-full left-0 bottom-[5px] w-[45px] h-[4px] bg-white 
          ease-in-out duration-500
          ${isMenuOpen ? 'rotate-45 -bottom-[5px] w-[35px]' : ''}
        `}
          ></span>
          <span
            className={`absolute -translate-x-full left-0 -bottom-[5px] w-[30px] h-[4px] bg-white 
          ease-in-out duration-500
          
          ${isMenuOpen ? '-rotate-45 bottom-[5px] w-[35px]' : ''}
        `}
          ></span>
        </div>
      </div>
    </nav>
  );
};

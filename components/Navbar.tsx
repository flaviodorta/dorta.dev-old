import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Sidebar from './Sidebar';

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
        className='relative z-50 flex items-center justify-end w-[50px] h-[40px] cursor-pointer'
        onClick={toggleMenu}
      >
        <div className='relative'>
          <span
            className={`absolute -translate-x-full left-0 h-[4px] bg-white
          ease-in-out duration-500 ${
            isMenuOpen
              ? 'rotate-45 w-[30px] md:w-[35px] bottom-0'
              : 'w-[30px] md:w-[45px] bottom-[2.5px]'
          }
        `}
          ></span>
          <span
            className={`absolute -translate-x-full  left-0  h-[4px] bg-white 
          ease-in-out duration-500 ${
            isMenuOpen
              ? '-rotate-45 w-[30px] md:w-[35px] bottom-0'
              : 'w-[20px] md:w-[30px] -bottom-[7.5px]'
          }
        `}
          ></span>
        </div>
      </div>

      <Sidebar isMenuOpen={isMenuOpen} />

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
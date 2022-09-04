import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <nav className='flex justify-between items-center text-white w-full'>
      <div>
        <Image src={Logo} width='180px' alt='Logo' />
      </div>

      <div
        className='relative flex flex-col justify-center items-center w-[80px] h-[80px] cursor-pointer'
        onClick={toggleMenu}
      >
        <span
          className={`w-[50px] h-[6px] mb-[5px] bg-white 
          ease-in-out duration-500
          ${isMenuOpen ? 'rotate-45' : ''}
        '
          ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}
        `}
        ></span>
        <span
          className={`w-[50px] h-[6px] mt-[5px] bg-white 
          ease-in-out duration-500
          ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}
        `}
        ></span>
      </div>
    </nav>
  );
};

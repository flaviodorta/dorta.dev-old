import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Sidebar from './Sidebar';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom } from '../recoil/atoms';
import useSound from 'use-sound';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [openMenuSoundPlay] = useSound('/sounds/open-menu.wav');

  const toggleMenu = () => {
    setIsMenuOpen((s) => !s);
    openMenuSoundPlay();
  };
  const toggleHover = () => setHover((s) => !s);

  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);

  return (
    // logo icon
    <nav className='flex justify-between items-center text-white w-full'>
      <div
        className='relative select-none w-[120px] h-[30px] md:w-[160px] md:h-[40px]'
        onMouseEnter={() => setCursorVariant('homeLogo')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <Image
          src={Logo}
          className='h-full w-[120px] sm:h-64'
          layout='fill'
          alt='Logo'
        />
      </div>

      {/* menu burger icon */}
      <div
        className='relative group group-hover:bg-transparent z-40 flex items-center justify-end w-[70px] h-[70px]'
        onClick={toggleMenu}
        onMouseEnter={() => {
          toggleHover();
          setCursorVariant('homeMenuIcon');
        }}
        onMouseLeave={() => {
          toggleHover();
          setCursorVariant('default');
        }}
        onMouseDown={() => setCursorVariant('clicked')}
        onMouseUp={() => setCursorVariant('homeMenuIcon')}
      >
        <div className='relative'>
          <span
            className={`absolute -translate-x-full left-0 h-[4px] ${
              hover ? 'bg-primary' : 'bg-white'
            }
          ease-in-out ${
            isMenuOpen
              ? 'rotate-45 w-[30px] md:w-[35px] bottom-0 duration-500'
              : 'w-[30px] md:w-[45px] bottom-[2.5px] duration-300'
          }
        `}
          />
          <span
            className={`absolute -translate-x-full left-0  h-[4px] ${
              hover ? 'bg-primary' : 'bg-white'
            }
          ease-in-out duration-500 ${
            isMenuOpen
              ? '-rotate-45 w-[30px] md:w-[35px] bottom-0'
              : 'w-[20px] md:w-[30px] -bottom-[7.5px]'
          }
        `}
          />
          <span
            className={`absolute -translate-x-full  left-0  h-[4px] ${
              hover ? 'bg-primary' : 'bg-white'
            }
          ease-in-out duration-700 ${
            isMenuOpen
              ? '-rotate-45 w-[30px] md:w-[35px] bottom-0 opacity-0 duration-75'
              : 'w-[10px] md:w-[15px] -bottom-[16.5px]'
          }
        `}
          />
        </div>
      </div>

      <Sidebar isMenuOpen={isMenuOpen} />
    </nav>
  );
};

import React, { useEffect, useRef } from 'react';
import { useHover } from '../hooks/useHover';
import useSound from 'use-sound';
import { useToggle } from '../hooks/useToggle';
import { useClearCursorStyle } from '../hooks/useClearCursorStyle';
import { useRecoilState } from 'recoil';
import { cancelableDelay } from '../helpers/functions';
import { cursorVariantAtom, hasCursorBgAtom } from '../recoil/atoms';

import Image from 'next/image';
import Logo from '../public/logo.svg';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);
  const [__, setHasCursorBg] = useRecoilState(hasCursorBgAtom);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const isMenuIconHover = useHover(menuIconRef);

  const [openMenuSoundPlay] = useSound('/sounds/open-menu.wav');
  const [hoverCloseMenuIconSoundPlay] = useSound(
    '/sounds/hover-close-menu-icon.wav'
  );
  const [hoverOpenMenuIconSoundPlay] = useSound(
    '/sounds/hover-open-menu-icon.wav'
  );

  const [setCursorToMenuIconHoveringDelay, clearCursorToMenuIconHoveringDelay] =
    cancelableDelay(() => {
      setCursorVariant('homeMenuIconHovering');
      clearCursorToMenuIconHoveringDelay();
    }, 150);

  const menuSounds = () => {
    if (isMenuOpen) {
      hoverCloseMenuIconSoundPlay();
    } else {
      hoverOpenMenuIconSoundPlay();
    }
  };

  // useEffect(() => {
  //   if (!isMenuIconHover && _ === 'homeMenuIconClicked') {
  //     console.log(_);
  //     clearCursorToMenuIconHoveringDelay();
  //   }
  // }, [isMenuIconHover, _]);

  const onClickMenuIcon = () => {
    setIsMenuOpen();
    openMenuSoundPlay();
    // setCursorVariant('homeMenuIconClicked');
    // setCursorToMenuIconHoveringDelay();
  };

  const onMouseEnterMenuIcon = () => {
    menuSounds();
    setHasCursorBg(false);
    setCursorVariant('homeMenuIconEntering');
    setCursorToMenuIconHoveringDelay();
  };

  const onMouseLeaveMenuIcon = () => {
    clearCursorToMenuIconHoveringDelay();
    setCursorVariant('default');
    setTimeout(() => setHasCursorBg(true), 250);
  };

  const onMouseEnterLogo = () => setCursorVariant('homeLogo');

  const onMouseLeaveLogo = () => setCursorVariant('default');

  useClearCursorStyle(menuIconRef, 'homeMenuIconHovering');

  return (
    // logo icon
    <nav className='flex justify-between items-center text-white w-full'>
      <div
        className='relative select-none w-[120px] h-[30px] md:w-[160px] md:h-[40px]'
        onMouseEnter={onMouseEnterLogo}
        onMouseLeave={onMouseLeaveLogo}
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
        ref={menuIconRef}
        className='relative group group-hover:bg-transparent z-40 flex items-center justify-end w-[70px] h-[70px]'
        onClick={onClickMenuIcon}
        onMouseEnter={onMouseEnterMenuIcon}
        onMouseLeave={onMouseLeaveMenuIcon}
        // onMouseDown={onMouseDownMenuIcon}
      >
        <div className='relative'>
          <span
            className={`absolute -translate-x-full left-0 h-[4px] ${
              isMenuIconHover ? 'bg-primary' : 'bg-white'
            }
          ease-in-out ${
            isMenuOpen
              ? 'rotate-45 w-[30px] md:w-[35px] bottom-0 duration-500'
              : 'w-[30px] md:w-[45px] bottom-[2.5px] duration-[200ms]'
          }
        `}
          />
          <span
            className={`absolute -translate-x-full left-0  h-[4px] ${
              isMenuIconHover ? 'bg-primary' : 'bg-white'
            }
          ease-in-out duration-[400ms] ${
            isMenuOpen
              ? '-rotate-45 w-[30px] md:w-[35px] bottom-0'
              : 'w-[20px] md:w-[30px] -bottom-[7.5px]'
          }
        `}
          />
          <span
            className={`absolute -translate-x-full  left-0  h-[4px] ${
              isMenuIconHover ? 'bg-primary' : 'bg-white'
            }
          ease-in-out duration-[600ms] ${
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

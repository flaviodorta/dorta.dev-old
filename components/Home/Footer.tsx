import { Variants, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { TbNorthStar } from 'react-icons/tb';
import GitHub from '../icons/Github';
import LinkedIn from '../icons/Linkedin';
import Instagram from '../icons/Instagram';

const socialIconVariants: Variants = {
  close: (idx) => ({
    y: '80%',
    opacity: 0,
    transition: {
      duration: 0.25,
      delay: (2 - idx) * 0.25,
    },
  }),
  open: (idx) => ({
    y: '0',
    opacity: 0.5,
    transition: {
      duration: 0.15,
      delay: idx * 0.15,
    },
  }),
  hover: {
    opacity: 1,
  },
};

const Footer = () => {
  const [shouldOpenSocialIcons, setShouldOpenSocialIcons] = useState(false);

  const toggleSocial = () => setShouldOpenSocialIcons((s) => !s);

  return (
    <footer className='flex justify-between'>
      <div
        className='w-10 h-[54px] overflow-hidden z-[41] relative -bottom-2 md:-bottom-8 flex items-center justify-center
        before:content-["aaaaaaaaaaa"] -before:top-[42px] before:left-0 before:text-4xl before:decoration-wavy before:decoration-white before:text-transparent before:underline
        before:animate-wave
        '
      />
      <div className='w-fit h-[80px] z-40 flex items-end justify-end'>
        <div className='flex flex-col gap-4 justify-end items-center'>
          <AnimatePresence>
            {shouldOpenSocialIcons && (
              <>
                <GitHub
                  key={2}
                  variants={socialIconVariants}
                  custom={2}
                  initial='close'
                  animate='open'
                  exit='close'
                  whileHover='hover'
                  className='w-5 h-5 relative z-50 -bottom-4  fill-white hover:fill-primary'
                />

                <LinkedIn
                  key={1}
                  variants={socialIconVariants}
                  custom={1}
                  initial='close'
                  animate='open'
                  exit='close'
                  whileHover='hover'
                  className='w-5 h-5 relative z-50 -bottom-4 fill-white hover:fill-primary'
                />

                <Instagram
                  key={0}
                  variants={socialIconVariants}
                  custom={0}
                  initial='close'
                  animate='open'
                  exit='close'
                  whileHover='hover'
                  className='w-5 h-5 relative z-50 -bottom-4 fill-white hover:fill-primary'
                />
              </>
            )}
          </AnimatePresence>

          <div className='group relative -bottom-4'>
            <div className='w-14 h-9 flex items-end justify-center group-hover:bg-transparent'>
              <TbNorthStar
                onClick={toggleSocial}
                className={`w-8 h-8 group-hover:text-primary duration-300 transition-all ${
                  shouldOpenSocialIcons ? 'rotate-90' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

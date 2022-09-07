import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { TbNorthStar } from 'react-icons/tb';
import GitHub from '../icons/Github';
import LinkedIn from '../icons/Linkedin';
import Instagram from '../icons/Instagram';

const socialIconVariants: Variants = {
  initial: {
    y: '50%',
  },
  open: (idx) => ({
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: idx * 0.3,
    },
  }),
  close: (idx) => ({
    y: '50%',
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: (2 - idx) * 0.3,
    },
  }),
};

const Footer = () => {
  const [shouldOpenSocialIcons, setShouldOpenSocialIcons] = useState(false);

  const toggleSocial = () => setShouldOpenSocialIcons((s) => !s);

  return (
    <footer className='flex justify-between'>
      <div
        className='w-10 h-[54px] overflow-hidden relative -bottom-4 md:-bottom-8 flex items-center justify-center
        before:content-["aaaaaaaaaaa"] -before:top-[42px] before:left-0 before:text-4xl before:decoration-wavy before:decoration-white before:text-transparent before:underline
        before:animate-wave
        '
      />
      <div className='w-fit h-[80px] z-40 flex items-end justify-end'>
        <AnimatePresence>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <GitHub
              key={2}
              variants={socialIconVariants}
              initial='initial'
              animate='open'
              exit='close'
              custom={2}
              className='w-5 h-5 relative fill-white group-hover:fill-primary duration-300'
            />

            <LinkedIn
              key={1}
              variants={socialIconVariants}
              initial='initial'
              animate='open'
              exit='close'
              custom={1}
              className='w-5 h-5 relative fill-white group-hover:fill-primary duration-300'
            />

            <Instagram
              key={0}
              variants={socialIconVariants}
              initial='initial'
              animate='open'
              exit='close'
              custom={0}
              className='w-5 h-5 relative fill-white group-hover:fill-primary duration-300'
            />

            <TbNorthStar
              onClick={toggleSocial}
              className={`w-8 h-8 hover:text-primary duration-300 transition-all ${
                shouldOpenSocialIcons ? 'rotate-90' : ''
              }`}
            />
          </div>
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;

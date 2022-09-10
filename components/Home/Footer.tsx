import { Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { TbNorthStar } from 'react-icons/tb';
import GitHub from '../icons/Github';
import LinkedIn from '../icons/Linkedin';
import Instagram from '../icons/Instagram';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom, soundAtom } from '../../recoil/atoms';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

const socialIconContainerVariants: Variants = {
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
    opacity: 1,
    transition: {
      duration: 0.15,
      delay: idx * 0.15,
    },
  }),
};

const soundLabelVariants: Variants = {
  hidden: {
    x: 48,
    y: 12,
    opacity: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    x: 56,
    y: 12,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.55,
    },
  },
};

const Footer = () => {
  const [shouldOpenSocialIcons, setShouldOpenSocialIcons] = useState(false);
  const [sound, setSound] = useRecoilState(soundAtom);
  const [soundLabel, setSoundLabel] = useState(false);
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);
  const [soundIconSoundPlay] = useSound('/sounds/hover-sound-icon.wav');
  const [soundOnPlay] = useSound('/sounds/turn-sound-on.wav');
  const [soundOffPlay] = useSound('/sounds/turn-sound-off.wav');

  const toggleSocial = () => setShouldOpenSocialIcons((s) => !s);
  const toggleSound = () => {
    setSound({ ...sound, isPlay: !sound.isPlay });
    if (soundLabel === true) {
      soundOffPlay();
    } else {
      soundOnPlay();
    }
  };
  const toggleSoundLabel = () => setSoundLabel((s) => !s);

  console.log(sound);
  return (
    <footer className='flex justify-between'>
      <div className='relative'>
        {/* sound icon */}
        <div
          className={`w-10 h-[54px] overflow-hidden z-[41] relative -bottom-2 md:-bottom-8 flex items-center justify-center
        before:content-["aaaaaaaaaaa"] -before:top-[42px] before:left-0 before:text-4xl ${
          sound.isPlay ? 'before:decoration-wavy' : 'before:decoration-solid'
        }  before:decoration-white before:text-transparent before:underline
        before:animate-wave
        `}
          onMouseEnter={() => {
            soundIconSoundPlay();
            setCursorVariant('homeSoundIcon');
            toggleSoundLabel();
          }}
          onMouseLeave={() => {
            setCursorVariant('default');
            toggleSoundLabel();
          }}
          onClick={toggleSound}
        />
        <AnimatePresence>
          {soundLabel && (
            <motion.div
              variants={soundLabelVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='hidden md:block absolute whitespace-nowrap font-share-tech font-white font-thin'
            >
              sound {sound.isPlay ? 'off' : 'on'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='w-fit h-[80px] z-40 flex items-end justify-end'>
        <div className='flex flex-col gap-4 justify-end items-center bottom'>
          <AnimatePresence>
            {shouldOpenSocialIcons && (
              <>
                <motion.div
                  className='group w-8 h-8 flex justify-center items-center'
                  key={2}
                  variants={socialIconContainerVariants}
                  custom={2}
                  initial='close'
                  animate='open'
                  exit='close'
                  onMouseEnter={() => setCursorVariant('homeSocialIcon')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <GitHub className='w-6 h-6 relative z-50 -bottom-4 brightness-50 group-hover:brightness-90 fill-white group-hover:fill-primary duration-300' />
                </motion.div>

                <motion.div
                  className='group w-8 h-8 flex justify-center items-center'
                  key={1}
                  variants={socialIconContainerVariants}
                  custom={1}
                  initial='close'
                  animate='open'
                  exit='close'
                  onMouseEnter={() => setCursorVariant('homeSocialIcon')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <LinkedIn className='w-6 h-6 relative z-50 -bottom-4 brightness-50 group-hover:brightness-90 fill-white group-hover:fill-primary duration-300' />
                </motion.div>

                <motion.div
                  className='group w-8 h-8 flex justify-center items-center'
                  key={0}
                  variants={socialIconContainerVariants}
                  custom={0}
                  initial='close'
                  animate='open'
                  exit='close'
                  onMouseEnter={() => setCursorVariant('homeSocialIcon')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Instagram className='w-6 h-6 relative z-50 -bottom-4 brightness-50 group-hover:brightness-90 fill-white group-hover:fill-primary duration-300' />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div className='group relative bottom-2 md:-bottom-4 mt-5 md:mt-0'>
            <div
              className='md:w-14 md:h-9 flex items-end justify-center group-hover:bg-transparent'
              onMouseEnter={() => setCursorVariant('homeOpenSocialIconsIcon')}
              onMouseLeave={() => setCursorVariant('default')}
            >
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

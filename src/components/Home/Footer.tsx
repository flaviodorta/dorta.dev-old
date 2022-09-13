import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRef } from 'react';
import { useToggle } from '../../hooks/useToggle';
import useSound from 'use-sound';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom, soundAtom } from '../../recoil/atoms';
import {
  socialIconContainerVariants,
  soundLabelVariants,
} from '../../helpers/variants';

import { TbNorthStar } from 'react-icons/tb';
import GitHub from '../icons/Github';
import LinkedIn from '../icons/Linkedin';
import Instagram from '../icons/Instagram';

export const Footer = () => {
  const [sound, setSound] = useRecoilState(soundAtom);
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);
  const [shouldOpenSocialIcons, toggleShouldOpenSocialIcons] = useToggle(false);
  const [soundLabel, toggleSoundLabel] = useToggle(false);

  const soundIconRef = useRef<HTMLDivElement>(null);
  const openSocialsIconsIconRef = useRef<HTMLDivElement>(null);

  const [soundIconSoundPlay] = useSound('/sounds/hover-sound-icon.wav');
  const [soundOnPlay] = useSound('/sounds/turn-sound-on.wav');
  const [soundOffPlay] = useSound('/sounds/turn-sound-off.wav');
  const [openSocialIconsSoundPlay] = useSound('/sounds/open-social-icons.wav');
  const [hoverSocialIconsIconSoundPlay] = useSound(
    '/sounds/hover-social-icons-icon.wav'
  );
  const [hoverSocialIconSoundPlay] = useSound('/sounds/hover-social-icon.wav');
  const [clickSocialIconSoundPlay] = useSound('/sounds/click-social-icon.wav');

  const toggleSound = () => {
    setSound({ ...sound, isPlay: !sound.isPlay });
    if (soundLabel === true) {
      soundOffPlay();
    } else {
      soundOnPlay();
    }
  };

  const onMouseEnterSoundIcon = () => {
    soundIconSoundPlay();
    setCursorVariant('homeSoundIcon');
    toggleSoundLabel();
  };

  const onMouseLeaveSoundIcon = () => {
    setCursorVariant('default');
    toggleSoundLabel();
  };

  const onClickSocialIcon = () => clickSocialIconSoundPlay();

  const onMouseEnterSocialIcon = () => {
    setCursorVariant('homeSocialIcon');
    hoverSocialIconSoundPlay();
  };

  const onMouseLeaveSocialIcon = () => setCursorVariant('default');

  const onClickOpenSocialsIconsIcon = () => {
    toggleShouldOpenSocialIcons();
    openSocialIconsSoundPlay();
  };

  const onMouseEnterOpenSocialsIconsIcon = () => {
    setCursorVariant('homeOpenSocialIconsIcon');
    hoverSocialIconsIconSoundPlay();
  };

  const onMouseLeaveOpenSocialsIconsIcon = () => setCursorVariant('default');

  const footerIconsVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.6,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.footer
      variants={footerIconsVariants}
      initial='initial'
      animate='animate'
      className='flex justify-between'
    >
      <div className='relative'>
        {/* sound icon */}
        <div
          ref={soundIconRef}
          className={`w-10 h-[54px] overflow-hidden z-[41] relative -bottom-2 md:-bottom-8 flex items-center justify-center
        before:content-["aaaaaaaaaaa"] -before:top-[42px] before:left-0 before:text-4xl ${
          sound.isPlay ? 'before:decoration-wavy' : 'before:decoration-solid'
        }  before:decoration-white before:text-transparent before:underline
        before:animate-wave
        `}
          onMouseEnter={onMouseEnterSoundIcon}
          onMouseLeave={onMouseLeaveSoundIcon}
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
                  className='social--icon-container group'
                  key={2}
                  variants={socialIconContainerVariants}
                  custom={2}
                  initial='close'
                  animate='open'
                  exit='close'
                  onClick={onClickSocialIcon}
                  onMouseEnter={onMouseEnterSocialIcon}
                  onMouseLeave={onMouseLeaveSocialIcon}
                >
                  <GitHub className='social--icon' />
                </motion.div>

                <motion.div
                  className='social--icon-container group'
                  key={1}
                  variants={socialIconContainerVariants}
                  custom={1}
                  initial='close'
                  animate='open'
                  exit='close'
                  onClick={onClickSocialIcon}
                  onMouseEnter={onMouseEnterSocialIcon}
                  onMouseLeave={onMouseLeaveSocialIcon}
                >
                  <LinkedIn className='social--icon' />
                </motion.div>

                <motion.div
                  className='social--icon-container group'
                  key={0}
                  variants={socialIconContainerVariants}
                  custom={0}
                  initial='close'
                  animate='open'
                  exit='close'
                  onClick={onClickSocialIcon}
                  onMouseEnter={onMouseEnterSocialIcon}
                  onMouseLeave={onMouseLeaveSocialIcon}
                >
                  <Instagram className='social--icon' />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div className='group relative bottom-2 md:-bottom-4 mt-5 md:mt-0'>
            <div
              ref={openSocialsIconsIconRef}
              className='md:w-14 md:h-9 flex items-end justify-center group-hover:bg-transparent'
              onMouseEnter={onMouseEnterOpenSocialsIconsIcon}
              onMouseLeave={onMouseLeaveOpenSocialsIconsIcon}
              onClick={onClickOpenSocialsIconsIcon}
            >
              <TbNorthStar
                className={`w-8 h-8 group-hover:text-primary group-hover:scale-125 group-active:scale-50 duration-300 transition-all ${
                  shouldOpenSocialIcons ? 'rotate-90' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

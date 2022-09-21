import { atom } from 'recoil';

export type CursorVariants =
  | 'default'
  | 'clicked'
  | 'homeHeading'
  | 'homeTypewriter'
  | 'homeOpenSocialIconsIcon'
  | 'homeSocialIcon'
  | 'homeMenuIcon'
  | 'homeMenuOption'
  | 'homeSoundIcon'
  | 'homeLogo';

export const cursorVariantAtom = atom({
  key: 'cursorVariant',
  default: 'default' as CursorVariants,
});

export const soundAtom = atom({
  key: 'sound',
  default: {
    isPlay: true,
  },
});

export const transitionAtom = atom({
  key: 'transition',
  default: {
    shouldTransition: false,
    transitionToPage: '',
  },
});

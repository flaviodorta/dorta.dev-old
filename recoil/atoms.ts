import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

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
  key: 'cursor-variant',
  default: 'default' as CursorVariants,
});

export const soundAtom = atom({
  key: 'sound',
  default: {
    isPlay: true,
  },
});

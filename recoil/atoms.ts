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
  key: 'cursor-variant',
  default: 'default' as CursorVariants,
});

import { atom } from 'recoil';

export type CursorVariants =
  | 'default'
  | 'clicked'
  | 'homeHeading'
  | 'homeTypewriter'
  | 'homeOpenSocialIconsIcon'
  | 'homeSocialIcon'
  | 'homeMenuIconEntering'
  | 'homeMenuIconHovering'
  | 'homeMenuIconClicked'
  | 'homeMenuOption'
  | 'homeSoundIcon'
  | 'homeLogo';

export const cursorVariantAtom = atom({
  key: 'cursorVariant',
  default: 'default' as CursorVariants,
});

export const hasCursorBgAtom = atom({
  key: 'hasCursorBg',
  default: true,
});

export const soundAtom = atom({
  key: 'sound',
  default: {
    isPlay: true,
  },
});

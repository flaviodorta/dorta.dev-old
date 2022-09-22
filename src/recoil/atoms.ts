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

export const lastUrlAtom = atom({
  key: 'lastUrl',
  default: '',
});

export type State = {
  isTransitioning: boolean;
  shouldRenderBg: boolean;
  shouldRenderPage: boolean;
};

export const transitionAtom = atom<State>({
  key: 'transition',
  default: {
    isTransitioning: true,
    shouldRenderBg: true,
    shouldRenderPage: false,
  },
});

import { Variants } from 'framer-motion';
import { CursorVariants } from '../recoil/atoms';

export const menuItemVariants: Variants = {
  visible: ({ idx }) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        delay: 0.4 + idx * 0.1,
        duration: 1,
      },
    };
  },
  hidden: ({ idx, length }) => {
    return {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0,
        delay: (length - idx) * 0.05,
        duration: 0.8,
      },
    };
  },
};

export const backgroundVariants: Variants = {
  open: {
    clipPath: 'circle(1000px at 384px 0px)',
    background: '#121212',
    transition: {
      duration: 1.8,
      type: 'spring',
      bounce: 0,
    },
  },
  close: {
    clipPath: 'circle(0px at 384px 0px)',
    background: '#121212',
    transition: {
      duration: 1.6,
      delay: 0.8,
      type: 'spring',
      bounce: 0,
    },
  },
};

export const linkNameVariants: Variants = {
  hovered: {
    x: 10,
    transition: {
      type: 'tween',
      duration: 0.18,
      delay: 0,
      ease: 'linear',
    },
  },
};

export interface MousePosition {
  x: number;
  y: number;
}

export const cursorVariants: (mousePosition: MousePosition) => Variants = (
  mousePosition: MousePosition
) => ({
  default: (variant: CursorVariants) => {
    const props = {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      border: '0px solid red',
    };

    if (
      variant === 'homeHeading' ||
      variant === 'homeTypewriter' ||
      variant === 'homeLogo'
    ) {
      return {
        ...props,
        mixBlendMode: 'darken',
      };
    }

    if (variant === 'homeMenuOption') {
      return {
        ...props,
        mixBlendMode: 'difference',
      };
    }

    if (variant === 'homeSocialIcon') {
    }

    return props;
  },
});

export const cursorStyleVariants: Variants = {
  default: {
    width: 8,
    height: 8,
    backgroundColor: '#ed0c32',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
  homeLogo: {
    width: 16,
    height: 16,
    backgroundColor: '#ed0c32',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
  homeMenuIcon: {
    width: 8 * 7,
    height: 8 * 7,
    backgroundColor: 'transparent',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeIn',
    },
    transitionEnd: {},
  },
  homeMenuOption: {
    width: 32,
    height: 32,
    backgroundColor: '#ed0c32',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeIn',
    },
  },
  homeHeading: {
    width: 8 * 14,
    height: 8 * 14,
    backgroundColor: '#ed0c32',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeIn',
    },
  },
  homeTypewriter: {
    width: 32,
    height: 32,
    backgroundColor: '#ed0c32',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeIn',
    },
  },
  homeOpenSocialIconsIcon: {
    width: 8 * 7,
    height: 8 * 7,
    backgroundColor: 'transparent',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
  homeSocialIcon: {
    width: 10 * 4,
    height: 10 * 4,
    backgroundColor: 'transparent',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
  homeSoundIcon: {
    width: 8 * 7,
    height: 8 * 7,
    backgroundColor: 'transparent',
    border: '2px solid #ed0c32',
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
};

export const socialIconContainerVariants: Variants = {
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

export const soundLabelVariants: Variants = {
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

export const introLogoVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.5,
      bounce: 0,
    },
  },
};

export const introLoadingBar: (width: number) => Variants = (
  width: number
) => ({
  animate: { opacity: 1, width: width },
  exit: { display: 'none' },
});

export const introTransitionLayerLoadingToButton: Variants = {
  initial: {
    width: 0,
  },
  animate: {
    width: 104,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const introEnterButtonText: Variants = {
  initial: {
    opacity: 0,
    border: '0px solid rgb(237,12,50)',
  },
  animate: {
    opacity: 1,
    border: '1px solid rgb(237,12,50)',
    transition: {
      duration: 0.6,
      delay: 1,
    },
  },
  whileTap: {
    scale: 1.3,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

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
) => {
  return {
    default: (variant: CursorVariants) => {
      const props = {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        border: '0px solid red',
      };

      if (variant === 'homeHeading' || variant === 'homeTypewriter') {
        return {
          ...props,
          mixBlendMode: 'darken',
        };
      }

      if (variant === 'homeSocialIcon') {
      }

      return props;
    },
  };
};

export const cursorStyleVariants: Variants = {
  default: {
    width: 8,
    height: 8,
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: [0.92, 0.96, 0.98, 0.94],
    },
  },
  homeHeading: {
    width: 8 * 14,
    height: 8 * 14,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: [1.5, 1.6, 1.4, 0.97],
    },
  },
  homeSocialIcon: {
    width: [8 * 4, 10 * 4, 8 * 4],
    height: [8 * 4, 10 * 4, 8 * 4],
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: [1.5, 1.6, 1.4, 0.97],
      repeat: Infinity,
    },
  },
  homeTypewriter: {
    width: 32,
    height: 32,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: [1.5, 1.6, 1.4, 0.97],
    },
  },
  homeMenuIconEntering: {
    width: 8 * 7,
    height: 8 * 7,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeIn',
    },
  },
  homeMenuIconHovering: {
    width: [8 * 7, 8 * 8, 8 * 7],
    height: [8 * 7, 8 * 8, 8 * 7],
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: [1.5, 1.6, 1.4, 0.97],
      repeat: Infinity,
    },
  },
  homeMenuIconClicked: {
    width: 8 * 5,
    height: 8 * 5,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: [1.5, 1.6, 1.4, 0.97],
    },
  },
  homeSoundIcon: {
    width: [8 * 6, 8 * 7, 8 * 6],
    height: [8 * 6, 8 * 7, 8 * 6],
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: [1.5, 1.6, 1.4, 0.97],
      repeat: Infinity,
    },
  },
  homeOpenSocialIconsIcon: {
    width: [8 * 6, 8 * 7, 8 * 6],
    height: [8 * 6, 8 * 7, 8 * 6],
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: [1.5, 1.6, 1.4, 0.97],
      repeat: Infinity,
    },
  },
  homeLogo: {
    width: [8, 16, 8],
    height: [8, 16, 8],
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: [1.5, 1.6, 1.4, 0.97],
      repeat: Infinity,
    },
  },
  homeMenuOption: {
    width: [8, 16, 8],
    height: [8, 16, 8],
    transition: {
      type: 'tween',
      duration: 0.35,
      ease: [0.92, 0.96, 0.98, 0.94],
      repeat: Infinity,
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

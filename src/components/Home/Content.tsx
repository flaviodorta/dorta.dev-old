import { motion, Variants } from 'framer-motion';
import React from 'react';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom } from '../../recoil/atoms';
import { Typewriter } from '../Typewriter/Typewriter';

export const Content = () => {
  const strings = [
    'modern & innovative digital solutions',
    'e-commerces, web systems, landing pages, blogs & much more',
    'front-end & back-end development',
    'UX & UI best pratices',
  ];

  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);

  const headingVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  const typewriterVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2.4,
      },
    },
  };

  return (
    <main className='mx-auto px-2 select-none font-anton md:-translate-y-16 md:-translate-x-16  2xl:-translate-y-24 2xl:-translate-x-24'>
      <motion.h1
        variants={headingVariants}
        initial='initial'
        animate='animate'
        className='text-6xl md:text-7xl mb-4'
        onMouseEnter={() => setCursorVariant('homeHeading')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        creative developer
        <span className='text-primary'>.</span>
      </motion.h1>

      <motion.p
        variants={typewriterVariants}
        initial='initial'
        animate='animate'
        className='font-montserrat absolute md:text-2xl'
        onMouseEnter={() => setCursorVariant('homeTypewriter')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <Typewriter texts={strings} initialDelay={4800} />
      </motion.p>
    </main>
  );
};

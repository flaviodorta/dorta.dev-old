import React from 'react';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom } from '../../recoil/atoms';
import { Typewriter } from '../Typewriter/Typewriter';

const Content = () => {
  const strings = [
    'modern & innovative digital solutions',
    'e-commerces, web systems, landing pages, blogs & much more',
    'front-end & back-end development',
    'UX & UI best pratices',
  ];

  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);

  return (
    <main className='mx-auto px-2 select-none font-anton md:-translate-y-24 md:-translate-x-24'>
      <h1
        className='text-6xl md:text-7xl mb-4'
        onMouseEnter={() => setCursorVariant('homeHeading')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        creative developer
        <span className='text-primary'>.</span>
      </h1>

      <p
        className='font-montserrat absolute md:text-2xl'
        onMouseEnter={() => setCursorVariant('homeTypewriter')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <Typewriter texts={strings} />
      </p>
    </main>
  );
};

export default Content;

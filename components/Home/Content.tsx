import React from 'react';
import { useTypewriter } from '../../hooks/useTypewrite/useTypewrite';

const Content = () => {
  const strings = [
    'modern & innovative digital solutions.',
    'e-commerces, web systems, landing pages, blogs & much more.',
    'front-end & back-end development.',
    'UX & UI best pratices.',
  ];

  const typewriter = useTypewriter({ texts: strings });

  return (
    <main className='mx-auto px-2 select-none font-anton md:-translate-y-24 md:-translate-x-24'>
      <h1 className='text-6xl md:text-7xl mb-4'>
        creative developer
        <span className='text-primary'>.</span>
      </h1>

      <p className='font-montserrat absolute font-regular md:text-2xl'>
        {typewriter}
      </p>
    </main>
  );
};

export default Content;

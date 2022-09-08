import React from 'react';
import { useTypeWriter } from '../../hooks/useTypeWriter';

const Content = () => {
  const typewriter = useTypeWriter();

  return (
    <main className='mx-auto px-2 select-none font-anton md:-translate-y-24 md:-translate-x-24'>
      <h1 className='text-6xl md:text-7xl mb-4'>
        creative developer
        <span className='text-primary'>.</span>
      </h1>

      <p className='font-montserrat absolute font-regular md:text-2xl'></p>
    </main>
  );
};

export default Content;

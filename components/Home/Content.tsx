import { useState } from 'react';
import { useTypeWriter } from '../../hooks/useTypeWriter';

const Content = () => {
  const strings = [
    'modern & innovative digital solutions.',
    'e-commerces, web systems, landing pages, blogs & much more.',
    'front-end & back-end development.',
    'UX & UI best pratices.',
  ];
  const [state, set] = useState(false);

  const typeWritter = useTypeWriter(strings, 1, 2, 2);

  return (
    <main className='mx-auto px-2 select-none font-anton md:-translate-y-24 md:-translate-x-24'>
      <h1 className='text-6xl md:text-7xl mb-4'>
        creative developer
        <span className='text-primary'>.</span>
      </h1>
      <p className='font-montserrat font-regular md:text-2xl'>
        modern <span className='font-bold text-primary'>&</span> innovative
        digital solutions
        <span className='text-primary font-bold font-anton ml-[5px] text-2xl leading-[0px] md:leading-[0px] md:text-4xl'>
          .
        </span>
      </p>
      {/* <p>{typeWritter}</p> */}
    </main>
  );
};

export default Content;

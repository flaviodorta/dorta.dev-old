import { nanoid } from '@reduxjs/toolkit';
import TypeIt from 'typeit-react';

const TypeEffect = () => {
  const strings = [
    'modern & innovative digital solutions',
    <span key={nanoid()} className='text-primary'>
      .
    </span>,
    'e-commerces, web systems, landing pages, blogs & much more.',
    'front-end & back-end development.',
    'UX &UI best pratices.',
  ];

  return (
    <>
      <TypeIt
        options={{
          loop: true,
          speed: 100,
        }}
        getAfterInit={(instance) => {
          instance
            .type(strings[0])
            .type(strings[1])
            .pause(4000)
            .delete(1000)
            .pause(2000)
            .type(strings[1])
            .pause(4000)
            .delete(1000)
            .pause(2000)
            .type(strings[2])
            .pause(4000)
            .delete(1000)
            .pause(2000)
            .type(strings[3])
            .pause(4000)
            .delete(1000)
            .pause(2000);

          return instance;
        }}
      />
    </>
  );
};

export default TypeEffect;

// const SuperStrong = ({ children }) => {
//   return <strong style={{ fontSize: '80px' }}>{children}</strong>;
// };

//  () => {
//   return (
//     <div className='App'>
//       <TypeIt>
//         Weak text. <SuperStrong>Super strong text.</SuperStrong>
//       </TypeIt>
//     </div>
//   );
// };

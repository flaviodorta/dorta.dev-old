import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
  const strings = [
    'modern & innovative digital solutions.',
    'e-commerces, web systems, landing pages, blogs & much more.',
    'front-end & back-end development.',
    'UX &UI best pratices.',
  ];

  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(strings[0])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .typeString(strings[1])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .typeString(strings[2])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .typeString(strings[3])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .start();
      }}
    />
  );
};

export default TypeEffect;

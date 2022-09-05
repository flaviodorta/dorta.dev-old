const Footer = () => {
  return (
    <footer className='flex justify-between'>
      <div
        className='w-[50px] h-[50px] overflow-hidden relative flex items-center justify-center
        before:content-["aaaaaaaaaaa"] -before:top-[42px] before:left-0 before:text-4xl before:decoration-wavy before:decoration-white before:text-transparent before:underline
        before:animate-wave
        '
      ></div>
      <div className='w-[80px] h-[80px] flex items-center justify-center'>
        social
      </div>
    </footer>
  );
};

export default Footer;

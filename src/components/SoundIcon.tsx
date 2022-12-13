export const SoundIcon = ({ isPlay }: { isPlay: boolean }) => {
  console.log(isPlay);
  return (
    <div className='container'>
      {isPlay ? (
        <>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </>
      ) : (
        <>
          <div className='stopped-bar'></div>
          <div className='stopped-bar'></div>
          <div className='stopped-bar'></div>
          <div className='stopped-bar'></div>
          <div className='stopped-bar'></div>
        </>
      )}
    </div>
  );
};

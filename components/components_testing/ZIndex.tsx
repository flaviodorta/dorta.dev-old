const ZIndex = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-32 h-32 z-10 relative left-9 bg-red-700'>
        <div className='w-20 h-20 z-20 left-[100px] relative bg-blue-700'></div>
      </div>
      <div className='w-24 h-24 z-10 static left-[700px] bg-green-700'></div>
      <div className='w-20 h-20 z-20 right-6 relative bg-purple-700'></div>
      <div className='w-20 h-20 z-40 fixed right-[700px] bg-orange-500'></div>
    </div>
  );
};

export default ZIndex;

import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-layout-2 flex flex-col justify-between text-white px-2 py-4 md:px-6 pb-8 md:pb-10 max-h-full h-screen overflow-hidden'>
      {children}
    </div>
  );
};

export default Layout;

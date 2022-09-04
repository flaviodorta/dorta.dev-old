import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-layout max-h-full h-screen px-4 py-2'>{children}</div>
  );
};

export default Layout;

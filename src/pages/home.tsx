import { InitialAnimationPage } from '../components/InitialAnimationPage';
import { Navbar } from '../components/Navbar';
import { Content } from '../components/Home/Content';
import { Footer } from '../components/Home/Footer';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { Space, SpaceBackground } from '../components/Space';
import { BakeShadows, CameraShake, ContactShadows } from '@react-three/drei';
import { useRecoilState } from 'recoil';

export default function HomePage() {
  return (
    <InitialAnimationPage>
      <SpaceBackground />

      <div className='fixed h-screen w-screen flex flex-col justify-between px-5 pb-4 md:px-6 md:pb-10'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </InitialAnimationPage>
  );
}

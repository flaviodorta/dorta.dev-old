import { InitialAnimationPage } from '../components/InitialAnimationPage';
import { Navbar } from '../components/Navbar';
import { Content } from '../components/Home/Content';
import { Footer } from '../components/Home/Footer';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { Space } from '../components/Space';
import { BakeShadows, CameraShake, ContactShadows } from '@react-three/drei';
import { useRecoilState } from 'recoil';

export default function HomePage() {
  return (
    <InitialAnimationPage>
      <Canvas
        camera={{
          position: [0, 0, 50],
          fov: 15,
        }}
        dpr={[0, 1.5]}
        className='h-screen fixed w-screen left-0 bottom-0 top-0 bg-black'
      >
        <Suspense fallback={null}>
          <Space />
        </Suspense>

        <ContactShadows
          renderOrder={2}
          color='black'
          resolution={1024}
          frames={1}
          scale={10}
          blur={1.5}
          opacity={0.65}
          far={0.5}
        />

        <BakeShadows />

        <CameraShake
          yawFrequency={0.1}
          pitchFrequency={0.1}
          rollFrequency={0.1}
        />
      </Canvas>

      <div className='fixed h-screen w-screen flex flex-col justify-between px-5 pb-4 md:px-6 md:pb-10'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </InitialAnimationPage>
  );
}

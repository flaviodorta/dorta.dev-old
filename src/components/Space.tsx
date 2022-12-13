import {
  BakeShadows,
  CameraShake,
  ContactShadows,
  Sparkles,
  Stars,
  useTexture,
  Sphere,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

export const Space = () => {
  const texture = useLoader(TextureLoader, '/jupiter.jpg');

  const [material, set] = useState();

  const spark = useRef<THREE.Points<
    THREE.BufferGeometry,
    THREE.Material | THREE.Material[]
  > | null>(null!);

  useFrame(({ clock, mouse }) => {
    if (!spark.current) return;
    spark.current.rotation.z = clock.getElapsedTime() * 0.001;
    spark.current.rotation.y = THREE.MathUtils.lerp(
      spark.current.rotation.y * 0.5,
      mouse.x * Math.PI * 0.2,
      0.001
    );
    spark.current.rotation.x = THREE.MathUtils.lerp(
      spark.current.rotation.x,
      mouse.y * Math.PI * 0.1,
      0.001
    );
  });

  return (
    <>
      <Stars
        radius={50}
        depth={50}
        count={60000}
        factor={4}
        saturation={10}
        fade
        speed={3}
      />
      <Sphere
        scale={54}
        args={[40, 40, 40]}
        position={[0, 0, 0]}
        material={material}
      />
      <Sparkles
        ref={spark}
        color={'white'}
        count={1000}
        scale={50}
        size={5}
        speed={0.8}
      />
    </>
  );
};

export const SpaceBackground = () => {
  return (
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
  );
};

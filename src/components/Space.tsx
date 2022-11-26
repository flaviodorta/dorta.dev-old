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

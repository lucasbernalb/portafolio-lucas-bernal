import { useRef, Suspense } from 'react';
import { useGLTF, Float, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from "react";
import { Box3, Vector3 } from "three";

interface AvatarProps {
  modelUrl?: string;
  scale?: number;
  position?: [number, number, number];
}

function AvatarModel({ 
  modelUrl = 'https://models.readyplayer.me/69ba024f2de3dcd9834670a2.glb',
  scale = 3.2,
  position = [1.5,0, 0]
}: AvatarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelUrl);


useEffect(() => {
  const box = new Box3().setFromObject(scene);
  const center = new Vector3();
  box.getCenter(center);

  scene.position.sub(center);
}, [scene]);

  useFrame((state) => {
  if (groupRef.current) {
    const t = state.clock.elapsedTime;

    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.05;
  }
});

  return (
    <group ref={groupRef} scale={scale} position={position}>
  <primitive object={scene} />
</group>
  );
}

function Loader() {
  return (
    <Html center>
      <div style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(0, 212, 255, 0.3)',
        borderTop: '2px solid #00d4ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
}

export function Avatar({ modelUrl, scale, position }: AvatarProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Float
        speed={1}
        rotationIntensity={0.1}
        floatIntensity={0.2}
        floatingRange={[-0.05, 0.05]}
      >
        <AvatarModel modelUrl={modelUrl} scale={scale} position={position} />
      </Float>
    </Suspense>
  );
}

useGLTF.preload('https://models.readyplayer.me/69ba024f2de3dcd9834670a2.glb');
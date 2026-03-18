import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingProfileProps {
  imageUrl?: string;
  size?: number;
}

export function FloatingProfile({ 
  imageUrl = '/berny.png',
  size = 2.2 
}: FloatingProfileProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  
  const texture = useTexture(imageUrl);
  
  const processedTexture = useMemo(() => {
    const tex = texture.clone();
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }, [texture]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.12 + Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
    }
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.15}
      floatIntensity={0.35}
      floatingRange={[-0.06, 0.06]}
    >
      <group>
        <RoundedBox
          ref={meshRef}
          args={[size, size * 1.4, 0.08]}
          radius={0.04}
          smoothness={4}
        >
          <meshPhysicalMaterial
            ref={materialRef}
            map={processedTexture}
            transmission={0.12}
            thickness={0.4}
            roughness={0.2}
            metalness={0.15}
            clearcoat={0.35}
            clearcoatRoughness={0.15}
            emissive="#00d4ff"
            emissiveIntensity={0.25}
            envMapIntensity={0.3}
            toneMapped={false}
          />
        </RoundedBox>
        
        <mesh position={[0, 0, -0.05]} scale={[size * 1.02, size * 1.42, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}
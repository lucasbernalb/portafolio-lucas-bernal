import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface ParticlesProps {
  count?: number;
  radius?: number;
}

export function Particles({ count = 35, radius = 7 }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const colorPurple = new THREE.Color('#a855f7');
    const colorPurpleDim = new THREE.Color('#6b21a8');
    const colorWhite = new THREE.Color('#e2e8f0');
    
    for (let i = 0; i < count; i++) {
      const seed = i * 137.5;
      const theta = seededRandom(seed) * Math.PI * 2;
      const phi = Math.acos(2 * seededRandom(seed + 1) - 1);
      const r = radius * (0.4 + seededRandom(seed + 2) * 0.6);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.6;
      
      sizes[i] = 0.4 + seededRandom(seed + 4) * 0.6;
      
      const colorChoice = seededRandom(seed + 5);
      let color: THREE.Color;
      
      if (colorChoice < 0.2) {
        color = colorWhite;
      } else if (colorChoice < 0.5) {
        color = colorPurple;
      } else {
        color = colorPurpleDim;
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors, sizes };
  }, [count, radius]);

  useFrame((_, delta) => {
    timeRef.current += delta;
    
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = timeRef.current;
      
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        positions[idx + 1] += Math.sin(time * 0.3 + i) * 0.0008;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = time * 0.012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        vertexColors
        transparent
        opacity={0.12}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

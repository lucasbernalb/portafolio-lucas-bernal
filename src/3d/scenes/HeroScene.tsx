import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { OrbitControls, Environment } from "@react-three/drei";
import { Avatar } from "../elements/Avatar";
import { Particles } from "../elements/Particles";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      // movimiento SUAVE hacia el mouse
      lightRef.current.position.x += (state.mouse.x * 2 - lightRef.current.position.x) * 0.08;
      lightRef.current.position.y += ((state.mouse.y * 1 + 1) - lightRef.current.position.y) * 0.08;
    }
  });

  return (
    <>
      {/* 🌫️ FOG */}
      <fog attach="fog" args={["#050508", 5, 15]} />

      {/* 💡 LUCES BASE */}
      <ambientLight intensity={0.35} />

      <directionalLight position={[2, 4, 3]} intensity={2.2} />

      <directionalLight
        position={[-2, 2, -2]}
        intensity={1.2}
        color="#00d4ff"
      />

      {/* 💡 LUZ INTERACTIVA (AJUSTADA A TU ESCENA) */}
      <pointLight
        ref={lightRef}
        position={[0, 1.5, 2]}
        intensity={8} // un poco más fuerte para que se note
        color="#22d3ee"
        distance={10}
      />

      {/* 🧍 TU AVATAR (NO TOCADO) */}
      <Avatar
        modelUrl="https://models.readyplayer.me/69ba024f2de3dcd9834670a2.glb"
        scale={1.5}
        position={[0, -1.9, 0]}
      />

      {/* ✨ PARTICULAS */}
      <Particles count={30} radius={6} />

      {/* 🌍 ENV */}
      <Environment preset="city" environmentIntensity={0.6} />

      {/* 🎮 CONTROLES */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 2.5}
        autoRotate
        autoRotateSpeed={0.1}
        rotateSpeed={0.3}
      />

      {/* 💥 POST FX (AJUSTADO) */}
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
        />
        <Vignette offset={0.2} darkness={0.7} />
        <Noise opacity={0.02} />
      </EffectComposer>

      {/* 🧱 SOMBRA (AJUSTADA A TU AVATAR) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
        <circleGeometry args={[1.4, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.2}
        />
      </mesh>
    </>
  );
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 12, 12]} />
      <meshBasicMaterial color="#22d3ee" wireframe />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px" }}>
      <Canvas
        camera={{ position: [0, 1.2, 4], fov: 40 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        shadows
        style={{
          background:
            "radial-gradient(ellipse at center, #0c0c12 0%, #050508 100%)",
        }}
      >
        <color attach="background" args={["#050508"]} />
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

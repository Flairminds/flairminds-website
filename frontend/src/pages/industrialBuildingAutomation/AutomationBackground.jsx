import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './IndustrialBuildingAutomation.module.css';

const PARTICLE_COUNT = 700;

function Particles() {
  const pointsRef = useRef(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const cyan = new THREE.Color('#0ea5e9');
    const purple = new THREE.Color('#8b5cf6');

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mixed = cyan.clone().lerp(purple, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    return { positions, colors };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0008;
    pointsRef.current.rotation.x += 0.0004;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.16} vertexColors transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function WireframeShape() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y -= 0.001;
    meshRef.current.rotation.x -= 0.0008;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[7, 1]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

function MouseParallaxCamera() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.current.y * 1.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function AutomationBackground() {
  return (
    <div className={styles.canvasBackground} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60, near: 0.1, far: 1000 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <MouseParallaxCamera />
        <Particles />
        <WireframeShape />
      </Canvas>
    </div>
  );
}

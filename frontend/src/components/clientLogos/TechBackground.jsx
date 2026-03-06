import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
    const ref = useRef();
    const count = 1000;

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x += delta / 10;
        ref.current.rotation.y += delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#005ba1"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.15}
                />
            </Points>
        </group>
    );
}

const TechBackground = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(to bottom, #ffffff 0%, #f0f7ff 100%)'
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
};

export default TechBackground;

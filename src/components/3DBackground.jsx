import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
                <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function Particles() {
    const points = useRef();

    const particlesCount = 1000;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    useFrame(({ clock }) => {
        points.current.rotation.y = clock.getElapsedTime() * 0.05;
        points.current.rotation.x = clock.getElapsedTime() * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#8b5cf6"
                sizeAttenuation
                transparent
                opacity={0.6}
            />
        </points>
    );
}

function GeometricShapes() {
    return (
        <>
            {/* Wireframe Cube */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5} position={[-3, 2, -2]}>
                <mesh>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color="#ec4899" wireframe />
                </mesh>
            </Float>

            {/* Wireframe Octahedron */}
            <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2} position={[3, -1, -1]}>
                <mesh>
                    <octahedronGeometry args={[0.6]} />
                    <meshStandardMaterial color="#06b6d4" wireframe />
                </mesh>
            </Float>

            {/* Torus */}
            <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.8} position={[2, 3, -3]}>
                <mesh>
                    <torusGeometry args={[0.5, 0.2, 16, 100]} />
                    <meshStandardMaterial color="#10b981" wireframe />
                </mesh>
            </Float>

            {/* Torus Knot - Mathematical Shape */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2.5} position={[-2, -2, -2]}>
                <mesh>
                    <torusKnotGeometry args={[0.4, 0.15, 100, 16]} />
                    <meshStandardMaterial color="#f59e0b" wireframe />
                </mesh>
            </Float>

            {/* Icosahedron - 20-sided platonic solid */}
            <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.7} position={[1, -3, -1.5]}>
                <mesh>
                    <icosahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#8b5cf6" wireframe />
                </mesh>
            </Float>

            {/* Dodecahedron - 12-sided platonic solid */}
            <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.6} position={[-1, 1, -2.5]}>
                <mesh>
                    <dodecahedronGeometry args={[0.4]} />
                    <meshStandardMaterial color="#6366f1" wireframe />
                </mesh>
            </Float>

            {/* Tetrahedron - Simplest 3D shape */}
            <Float speed={1.7} rotationIntensity={0.9} floatIntensity={1.9} position={[3, 1, -2]}>
                <mesh>
                    <tetrahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#ec4899" wireframe />
                </mesh>
            </Float>

            {/* Cone */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5} position={[-3, -1, -2]}>
                <mesh>
                    <coneGeometry args={[0.4, 0.8, 8]} />
                    <meshStandardMaterial color="#14b8a6" wireframe />
                </mesh>
            </Float>
        </>
    );
}

const ThreeDBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Don't render on mobile for performance
    if (isMobile) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            opacity: 0.4
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />

                <AnimatedSphere />
                <Particles />
                <GeometricShapes />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
};

export default ThreeDBackground;

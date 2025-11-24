import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

// Coordinates for IIT (BHU) Varanasi
const MY_LOC = {
    lat: 25.2677,
    lon: 82.9913,
    name: "IIT (BHU)"
};

// Helper to convert Lat/Lon to 3D Vector3
const latLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    return new THREE.Vector3(x, y, z);
};

const LocationMarker = ({ position, color, label, isUser }) => {
    const meshRef = useRef();
    const ringRef = useRef();

    useFrame(({ clock }) => {
        if (ringRef.current) {
            const scale = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.3;
            ringRef.current.scale.set(scale, scale, scale);
            ringRef.current.material.opacity = 0.5 - Math.sin(clock.getElapsedTime() * 3) * 0.2;
        }
    });

    return (
        <group position={position}>
            {/* Core Pin */}
            <mesh position={[0, 0.05, 0]}>
                <cylinderGeometry args={[0.02, 0.005, 0.15, 8]} />
                <meshBasicMaterial color={color} />
            </mesh>

            {/* Glowing Sphere at top */}
            <mesh position={[0, 0.12, 0]}>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} />
            </mesh>

            {/* Pulsing Ring on surface */}
            <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                <ringGeometry args={[0.05, 0.08, 32]} />
                <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.5} />
            </mesh>

            <Html distanceFactor={12} zIndexRange={[100, 0]}>
                <div style={{
                    background: 'rgba(10, 10, 10, 0.85)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${color}`,
                    boxShadow: `0 0 15px ${color}40`,
                    color: 'white',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                    transform: 'translate3d(-50%, -150%, 0)',
                    backdropFilter: 'blur(4px)',
                    fontFamily: 'var(--font-heading)'
                }}>
                    <span style={{ color: color }}>●</span> {label}
                </div>
            </Html>
        </group>
    );
};

const AnimatedConnection = ({ start, end, color }) => {
    const lineRef = useRef();

    const points = useMemo(() => {
        const p1 = start;
        const p2 = end;
        const dist = p1.distanceTo(p2);

        // Calculate control points for a nice arc
        const mid = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(2 + dist * 0.8);

        const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
        return curve.getPoints(50);
    }, [start, end]);

    useFrame(({ clock }) => {
        if (lineRef.current) {
            lineRef.current.material.dashOffset = -clock.getElapsedTime() * 1;
        }
    });

    return (
        <group>
            {/* Base Line */}
            <Line
                points={points}
                color={color}
                lineWidth={1}
                transparent
                opacity={0.3}
            />
            {/* Animated Dash Line */}
            <Line
                ref={lineRef}
                points={points}
                color="white"
                lineWidth={2}
                dashed
                dashScale={10}
                dashSize={0.5}
                gapSize={0.5}
            />
        </group>
    );
};

// Fixed Earth component where markers stick to the surface
const InteractiveEarth = ({ userLocation }) => {
    const earthGroup = useRef();

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
    ]);

    const radius = 2;
    const myPos = latLonToVector3(MY_LOC.lat, MY_LOC.lon, radius);
    const userPos = userLocation ? latLonToVector3(userLocation.lat, userLocation.lon, radius) : null;

    useFrame(({ clock }) => {
        // Rotate clouds independently
        if (earthGroup.current) {
            // We can rotate the whole group slowly for effect
            // earthGroup.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={earthGroup}>
            {/* Base Earth */}
            <mesh>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}
                    specular={new THREE.Color(0x333333)}
                    shininess={15}
                />
            </mesh>

            {/* Clouds - slightly larger and rotating */}
            <mesh>
                <sphereGeometry args={[radius + 0.02, 64, 64]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.4}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                    depthWrite={false}
                />
            </mesh>

            {/* Atmosphere Glow */}
            <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshBasicMaterial
                    color="#4f46e5"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Markers & Connection */}
            <LocationMarker position={myPos} color="#ec4899" label="IIT (BHU)" />

            {userPos && (
                <>
                    <LocationMarker position={userPos} color="#10b981" label="You" isUser />
                    <AnimatedConnection start={myPos} end={userPos} color="#6366f1" />
                </>
            )}
        </group>
    );
};

const Globe3D = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lon: longitude });

                    // Calculate distance
                    const R = 6371;
                    const dLat = deg2rad(latitude - MY_LOC.lat);
                    const dLon = deg2rad(longitude - MY_LOC.lon);
                    const a =
                        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(deg2rad(MY_LOC.lat)) * Math.cos(deg2rad(latitude)) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const d = R * c;
                    setDistance(Math.round(d));
                },
                (err) => {
                    console.error("Error getting location:", err);
                    setError("Enable location to connect!");
                }
            );
        } else {
            setError("Geolocation not supported");
        }
    }, []);

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    return (
        <div style={{ width: '100%', height: '600px', position: 'relative', margin: '4rem 0' }}>
            {/* Info Overlay */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                textAlign: 'center',
                background: 'rgba(10, 10, 10, 0.7)',
                backdropFilter: 'blur(12px)',
                padding: '1.5rem 2.5rem',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                    Global Connection
                </h3>
                {distance ? (
                    <div style={{ marginTop: '0.5rem' }}>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Distance to IIT (BHU)
                        </p>
                        <p style={{
                            margin: '0.2rem 0 0',
                            color: 'var(--accent-primary)',
                            fontWeight: 'bold',
                            fontSize: '1.8rem',
                            textShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                        }}>
                            {distance.toLocaleString()} km
                        </p>
                    </div>
                ) : (
                    <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>
                        {error || "Locating you..."}
                    </p>
                )}
            </div>

            <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
                <color attach="background" args={['#050505']} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />

                <React.Suspense fallback={null}>
                    <InteractiveEarth userLocation={userLocation} />
                </React.Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                    autoRotate={!userLocation}
                    autoRotateSpeed={0.8}
                    rotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
};

export default Globe3D;

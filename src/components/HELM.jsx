import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Component for the rotating cube
function RotatingCube(props) {
    const meshRef = useRef();

    // Rotate the cube on each frame
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh {...props} ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} /> {/* Standard 1x1x1 cube */}
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
}

export default function HELM() {
    return (
        <Canvas
            style={{ height: '300px', width: '300px', border: '1px solid grey' }} // Set specific size and add a border for visibility
            camera={{ position: [2, 2, 2], fov: 50 }} // Adjusted camera for a smaller scene
        >
            <color attach="background" args={['#f0f0f0']} /> {/* Lighter background */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            
            <Suspense fallback={<div>Loading...</div>}>
                <RotatingCube scale={1} /> {/* Use the new RotatingCube component */}
            </Suspense>
        </Canvas>
    );
}
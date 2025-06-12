import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

// Component for the tank model
function TankModel(props) {
    const { scene } = useGLTF('/tank.glb');
    const meshRef = useRef();

    // Rotate the model on each frame
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return <primitive object={scene} {...props} ref={meshRef} />;
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
            
            <Suspense fallback={<Html><div>Loading...</div></Html>}>
                <TankModel scale={0.1} /> {/* Use the new TankModel component and adjust scale if necessary */}
            </Suspense>
        </Canvas>
    );
}
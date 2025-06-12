import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';

// Component for the tank model
function TankModel(props) {
    const { scene } = useGLTF('/tank.glb');

    return <primitive object={scene} {...props} />;
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
            <OrbitControls enablePan={false} /> {/* Added OrbitControls for camera interaction, disabled pan */}
            <Suspense fallback={<Html><div>Loading...</div></Html>}>
                <TankModel scale={0.1} /> {/* Use the new TankModel component and adjust scale if necessary */}
            </Suspense>
        </Canvas>
    );
}
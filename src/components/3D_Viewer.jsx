import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';

// Component for the tank model
function TankModel(props) {
    const { scene } = useGLTF('src/assets/models/tank.glb');
    // Add ref and useFrame for rotation
    const ref = React.useRef();
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.008; // Adjust speed as needed
        }
    });
    return <primitive ref={ref} object={scene} {...props} />;
}

export default function HELM() {
    return (
        <Canvas
            style={{ height: '300px', width: '300px', border: '1px solid grey', background: 'none' }} // Set specific size, border, and transparent background
            camera={{ position: [0.7, 0.7, 0.7], fov: 50 }} // Adjusted camera for a smaller scene
            gl={{ alpha: true }} // Enable alpha channel for transparency
        >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <OrbitControls enablePan={false} /> {/* Added OrbitControls for camera interaction, disabled pan */}
            <Suspense fallback={<Html><div>Loading...</div></Html>}>
                <TankModel scale={0.1} /> {/* Use the new TankModel component and adjust scale if necessary */}
            </Suspense>
        </Canvas>
    );
}
import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei';

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
    return <primitive ref={ref} object={scene} rotation={[0, Math.PI / 1, 0]} {...props} />;
}

export default function HELM() {
    return (
        <div style={{ boxShadow: 'none', border: 'none', outline: 'none', background: 'none', padding: 0, margin: 0 }}>
            <style>{`
                canvas { box-shadow: none !important; border: none !important; outline: none !important; background: none !important; }
            `}</style>
            <Canvas
                style={{ height: '400px', width: '400px', border: 'none', background: 'none', boxShadow: 'none', outline: 'none' }}
                camera={{ position: [0.45, 0.2, 0.45], fov: 50 }}
                gl={{ alpha: true }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={0.7} />
                <Environment preset="sunset" background={false} />
                <OrbitControls enablePan={false} minDistance={0.3} maxDistance={1.5} />
                <Suspense fallback={<Html><div>Loading...</div></Html>}>
                    <TankModel scale={0.1} />
                </Suspense>
            </Canvas>
        </div>
    );
}
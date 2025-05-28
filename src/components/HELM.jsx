import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props) {
    // Ändere diese Zeile zu deinem Modellpfad
    const { scene } = useGLTF('https://threejs.org/examples/models/gltf/DamagedHelmet/glTF-Binary/DamagedHelmet.glb');
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    return <primitive object={scene} ref={modelRef} {...props} />;
}

export default function HELM() {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [2, 2, 2], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={<div>Lade Modell...</div>}>
                <Model />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
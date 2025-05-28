import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model(props) {
  // Lade das GLB-Modell.
  // Ersetze 'path/to/your/model.glb' mit dem Pfad zu deiner GLB-Datei.
  // Für dieses Beispiel verwenden wir ein kostenloses Modell von Sketchfab.
  // Du kannst jedes beliebige GLB-Modell verwenden.
  // Beispiel-Modell-URL: https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/models/gltf/DamagedHelmet/glTF-Binary/DamagedHelmet.glb
  const { scene } = useGLTF('https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/models/gltf/DamagedHelmet/glTF-Binary/DamagedHelmet.glb');
  const modelRef = useRef();

  // Du kannst useFrame für Animationen verwenden, falls gewünscht.
  // useFrame(() => {
  //   if (modelRef.current) {
  //     modelRef.current.rotation.y += 0.01;
  //   }
  // });

  return <primitive object={scene} ref={modelRef} {...props} />;
}

// Die Haupt-App-Komponente
export default function helmet() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        {/* Umgebungslicht für eine grundlegende Ausleuchtung */}
        <ambientLight intensity={0.5} />
        {/* Punktlicht für bessere Schattierung und Highlights */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* Suspense wird verwendet, um einen Ladezustand anzuzeigen, während das Modell geladen wird. */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* OrbitControls ermöglicht die Kamerasteuerung (Rotation, Zoom, Pan) mit der Maus. */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// Stelle sicher, dass du diese Komponente in deiner Hauptanwendungsdatei (z.B. index.js oder App.js) renderst.
// Beispiel:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'; // Annahme, dass der obige Code in App.js ist
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
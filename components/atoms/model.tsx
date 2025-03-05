"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import * as THREE from "three";

interface ModelProps {
  url: string;
}

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "black",
          side: THREE.DoubleSide,
        });
      }
    });
    setIsLoaded(true); 
  }, [scene]);

  scene.scale.set(5, 5, 5);

  return isLoaded ? <primitive object={scene} /> : null;
};

export default function GLBViewer({ url }: ModelProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full relative bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-800">Loading...</p>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={() => setIsLoading(false)} // Set loading selesai saat canvas siap
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
            <Model url={url} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

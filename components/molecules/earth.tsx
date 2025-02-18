"use client"
import { OrbitControls, useGLTF, useAnimations, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useEffect, useRef } from "react";

const Earth = () => {
    const { scene, animations } = useGLTF('/earth_cartoon.glb');
    const { actions } = useAnimations(animations, scene);
    const mixer = useRef(new THREE.AnimationMixer(scene));
    const earthRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        mixer.current.update(delta);

        if (earthRef.current) {
            earthRef.current.rotation.x += 0.005;  
        }

    });

    useEffect(() => {
        Object.values(actions).forEach((action) => {
        action?.play(); 
        });
    }, [actions]);
    return (
        <primitive object={scene} ref={earthRef} scale={[4.1, 4.1, 4.1]} position={[0, -5, 0]}/>
    )
    
}

export const Model = () => {

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[15, 15, 15]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        decay={2}
        distance={100}
      />
      <Earth/>
      <Stars radius={50} count={1000} factor={4} fade speed={2}/>
    </Canvas>
  );
};

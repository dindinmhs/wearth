"use client"
import { useGLTF, useAnimations, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { MotionValue } from "framer-motion";

interface Props {
  backgroundY : MotionValue<number>
}

const Earth = ({backgroundY}:Props) => {
    const { scene, animations } = useGLTF('/earth_d.glb');
    const { actions } = useAnimations(animations, scene);
    const mixer = useRef(new THREE.AnimationMixer(scene));
    const earthRef = useRef<THREE.Group>(null);

    const colorMap = useTexture("earthtexture.jpeg");

    const [scrollY, setScrollY] = useState(0);

    // Handle scroll untuk mengubah posisi
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY); // Simpan nilai scroll Y
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame((state, delta) => {
        mixer.current.update(delta);
        if (earthRef.current) {
          const positionY = THREE.MathUtils.clamp(-3 + (scrollY / 600) * 3, -3, -1);
          earthRef.current.position.y = positionY;
      }
    });

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const material = Array.isArray(child.material) ? child.material : [child.material];
        material.forEach((mat) => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.map = colorMap;
          }
        });
      }
    });

    useEffect(() => {
        Object.values(actions).forEach((action) => {
        action?.play(); 
        });
    }, [actions]);

    return (
        <primitive object={scene} ref={earthRef} rotation={[-10, -10, 0]} scale={[1.6, 1.6, 1.6]} position={[0, 0, 2]}/>
    )
    
}

export const Model = ({backgroundY}:Props) => {

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
      <Earth backgroundY={backgroundY}/>
      <Stars radius={50} count={1000} factor={4} fade speed={2}/>
    </Canvas>
  );
};

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React from "react";
import Texture from "../textures/8k_sun.jpg";
import * as THREE from "three";

const Mars = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        size={[`2000px`, `3000px`]}
        style={{ width: `100%`, height: `100%`, position: `relative` }}
        shadows
        camera={{ position: [0, 20, 25], fov: 90 }}
      >
        <Planet />
        <Lights />
        <color attach="background" args={["black"]} />
        <Stars radius={300} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

function Planet() {
  const texture = useLoader(THREE.TextureLoader, Texture);
  return (
    <mesh>
      <sphereGeometry args={[10, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

export default Mars;

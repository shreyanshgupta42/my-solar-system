import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import Texture from "../textures/8k_saturn.jpg";
import * as THREE from "three";

const scale=7000;

const random = (a, b) => a + Math.random() * b;

const moonData=[
  {
    id:1,
    color:"grey",
    xRadius: 1221900/scale ,
    zRadius: 1221900/scale ,
    size:5150/scale,
    speed: 5.57/10,
    offset: random(0, Math.PI * 2),
    Name: "TITAN"
  },
  {
    id:2,
    color:"brown",
    xRadius: 527100/scale,
    zRadius: 527100/scale,
    size:1528,
    speed: 8.49/10,
    offset: random(0, Math.PI * 2),
    Name: "RHEA"
  },
  {
    id:3,
    color:"orange",
    xRadius: 3560800/scale,
    zRadius: 3560800/scale,
    size:1436,
    speed: 3.27/10,
    offset: random(0, Math.PI * 2),
    Name:"LAPETUS"
  },
  {
    id:4,
    color:"red",
    xRadius: 377400/scale,
    zRadius: 377400/scale,
    size:1120 ,
    speed: 10/10,
    offset: random(0, Math.PI * 2),
    Name:"DIONE"
  }
]

const Saturn = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        size={[`2000px`, `3000px`]}
        style={{ width: `100%`, height: `100%`, position: `relative` }}
        shadows
        camera={{ position: [0, 20, 25], fov: 90 }}
      >
        <Planet />
        {moonData.map((planet) => (
          <Moon planet={planet} key={planet.id} />
        ))}
        <Lights />
        <color attach="background" args={["black"]} />
        <Stars radius={300} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

function Moon({ planet: { color, xRadius, zRadius, size, speed, offset } }) {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime()*speed+offset) / 7;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size/(scale/3), 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

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


function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}

export default Saturn;

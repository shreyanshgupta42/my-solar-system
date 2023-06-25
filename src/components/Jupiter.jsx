import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import jupiterTexture from "../textures/8k_jupiter.jpg";
import * as THREE from "three";
const scale=7000;

const random = (a, b) => a + Math.random() * b;

const moonData=[
  {
    id:1,
    color:"grey",
    xRadius: 1070400/scale ,
    zRadius: 1070400/scale ,
    size:5268/scale,
    speed: 10.9/10,
    offset: random(0, Math.PI * 2),
    Name: "GANYMEDE"
  },
  {
    id:2,
    color:"brown",
    xRadius: 1882700/scale,
    zRadius: 1882700/scale,
    size:4820.6,
    speed: 8.2/10,
    offset: random(0, Math.PI * 2),
    Name: "CALLISTO"
  },
  {
    id:3,
    color:"orange",
    xRadius: 421800/scale,
    zRadius: 421800/scale,
    size:3643.2,
    speed: 17.3/10,
    offset: random(0, Math.PI * 2),
    Name:"IO"
  },
  {
    id:4,
    color:"red",
    xRadius: 671100/scale,
    zRadius: 671100/scale,
    size:3121.6 ,
    speed: 13.7/10,
    offset: random(0, Math.PI * 2),
    Name:"Europa"
  }
]

const Jupiter = () => {
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
  const texture = useLoader(THREE.TextureLoader, jupiterTexture);
  return (
    <mesh>
      <sphereGeometry args={[69911/scale, 32, 32]} />
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

export default Jupiter;

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import planetData from "../planetData";
import "../styles.css";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <Canvas shadows camera={{ position: [0, 20, 25], fov: 100 }}>
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <color attach="background" args={["black"]} />
        <Stars radius={300} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

const sunsizescaling = 1000000;
const planetsizescaling = 200000;

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[696000 / sunsizescaling, 32, 32]} />
      <meshStandardMaterial color="#E1DC59" />
    </mesh>
  );
}
function Planet({ planet: { color, xRadius, zRadius, size, speed, offset } }) {
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
        <sphereGeometry args={[size / planetsizescaling, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
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

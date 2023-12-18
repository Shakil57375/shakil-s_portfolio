import React, { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import * as THREE from "three"; // Add this line to import THREE

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  shaderMaterial,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";

const GradientShaderMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color(),
    color2: new THREE.Color(),
  },
  `
    varying vec2 vUv;

    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    varying vec2 vUv;

    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;

    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `
);

extend({ GradientShaderMaterial });

const Ball = () => {
  const color1 = new THREE.Color("#daf73b");
  const color2 = new THREE.Color("#ff5500");

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <gradientShaderMaterial time={0} color1={color1} color2={color2} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

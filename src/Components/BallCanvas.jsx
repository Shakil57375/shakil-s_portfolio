/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { Float } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "react-three-fiber";
import * as THREE from "three"; // Add this line to import THREE
const GradientShaderMaterial = shaderMaterial(
  { time: 0, color1: new THREE.Color(), color2: new THREE.Color() },
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

const Ball = (props) => {
  const color1 = new THREE.Color("#daf73b");
  const color2 = new THREE.Color("#ff5500"); // Change this color as needed

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <gradientShaderMaterial
          time={0}
          color1={color1}
          color2={color2}
        />
      </mesh>
    </Float>
  );
};



const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
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

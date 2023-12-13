import { useEffect } from 'react';
import * as THREE from 'three';

const ThreeDCircle = () => {
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('gradient-circle').appendChild(renderer.domElement);

    // Create a gradient material
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff, // This color will be ignored due to the gradient
      vertexColors: THREE.VertexColors,
      side: THREE.DoubleSide,
    });

    // Create a geometry for the circle
    const geometry = new THREE.CircleGeometry(5, 64);
    const colors = geometry.attributes.position.array.map((position, index) => {
      if (index % 3 === 0) {
        // X coordinate
        const percentage = index / (geometry.attributes.position.array.length / 3);
        const color = new THREE.Color().setHSL(percentage, 1, 0.5);
        return color.r;
      }
    });

    // Add colors to the geometry
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

    // Create a mesh with the gradient material and the circle geometry
    const circle = new THREE.Mesh(geometry, material);

    // Add the circle to the scene
    scene.add(circle);

    // Set the camera position
    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize');
    };
  }, []);

  return <div id="gradient-circle" />;
};

export default ThreeDCircle;

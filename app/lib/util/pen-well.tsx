"use client";

import * as THREE from "three";
import { useCallback, useState } from "react";

const WIDTH = 512;
const HEIGHT = 512;

export const initThreeScene = (node: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff);
  renderer.setSize(WIDTH, HEIGHT);
  node.appendChild(renderer.domElement);
  camera.position.z = 5;
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
};

export const ThreeCanvas = () => {
  const [initialized, setInitialized] = useState(false);
  const threeDivRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialized) {
        initThreeScene(node);
        setInitialized(true);
      }
    },
    [initialized],
  );

  return (
    <div
      ref={threeDivRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );
};

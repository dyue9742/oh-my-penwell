"use client";

import * as THREE from "three";
import { useCallback, useState } from "react";

export const initThreeScene = (node: HTMLDivElement) => {
  const wW = window.innerWidth;
  const wH = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, wW / wH, 0.1, 1000);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.clearColor();
  renderer.setSize(wW, wH);
  node.appendChild(renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);
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
        left: 0,
        bottom: 0,
        position: "absolute",
      }}
    ></div>
  );
};

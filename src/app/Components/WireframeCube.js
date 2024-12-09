"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const WireframeCube = () => {
  const canvasRef = useRef(null);
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Scene
    const scene = new THREE.Scene();

    // Mesh
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
      new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    );
    scene.add(mesh);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 3;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(sizes.width, sizes.height);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Cursor Listener
    const handleMouseMove = (event) => {
      cursor.current.x = event.clientX / sizes.width - 0.5;
      cursor.current.y = -(event.clientY / sizes.height - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animate
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Animate Mesh - add this for ongoing rotate
      // mesh.rotation.y = elapsedTime;

      // Update Camera
      camera.position.x = Math.sin(cursor.current.x * Math.PI * 2) * 3;
      camera.position.z = Math.cos(cursor.current.x * Math.PI * 2) * 3;
      camera.position.y = cursor.current.y * 3;
      camera.lookAt(mesh.position);

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };

    tick();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      controls.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100vh" }}
    />
  );
};

export default WireframeCube;



// "use client"; // Only for Next.js app directory (if using the `app` directory)

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const WireframeCube = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene, Camera, and Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();

//     // Attach the renderer to the DOM
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Add a Cube
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} />;
//   // return <div>Cube here</div>
// };

// export default WireframeCube;
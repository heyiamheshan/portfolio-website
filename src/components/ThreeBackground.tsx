import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // Extract CSS variables for theme-aware colors
    const style = getComputedStyle(document.documentElement);
    const accentColor = style.getPropertyValue('--accent-color').trim() || '#0071e3';
    // Clean up color string for Three.js
    const colorHex = parseInt(accentColor.replace('#', ''), 16) || 0x0071e3;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
       posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Add lines to simulate RAG pipeline / neural network
    const material = new THREE.PointsMaterial({
      size: 0.04,
      color: colorHex,
      transparent: true,
      opacity: 0.5,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    
    // Additional floating geometric nodes
    const linesMaterial = new THREE.LineBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.1,
    });
    const linesMesh = new THREE.LineSegments(particlesGeometry, linesMaterial);
    scene.add(linesMesh);

    camera.position.z = 4;
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
        // Normalize mouse coordinates to standard range
        mouseX = (event.clientX - windowHalfX) * 0.001;
        mouseY = (event.clientY - windowHalfY) * 0.001;
    };
    
    window.addEventListener('mousemove', onDocumentMouseMove);
    
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = () => {
      targetX = mouseX;
      targetY = mouseY;

      const elapsedTime = (performance.now() - startTime) / 1000;
      
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;
      linesMesh.rotation.y += 0.0005;
      linesMesh.rotation.x += 0.0002;
      
      // Smooth movement towards mouse position
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
      linesMesh.rotation.y += 0.05 * (targetX - linesMesh.rotation.y);
      linesMesh.rotation.x += 0.05 * (targetY - linesMesh.rotation.x);
      
      // Floating animation for specific particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for(let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Move Y slightly
        positions[i3 + 1] += Math.sin(elapsedTime * 0.5 + positions[i3]) * 0.002;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Mutation observer for theme changes to update color dynamically
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newStyle = getComputedStyle(document.documentElement);
          const newAccentColor = newStyle.getPropertyValue('--accent-color').trim() || '#0071e3';
          const newColorHex = parseInt(newAccentColor.replace('#', ''), 16) || 0x0071e3;
          material.color.setHex(newColorHex);
          linesMaterial.color.setHex(newColorHex);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onDocumentMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      particlesGeometry.dispose();
      material.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }} />;
}


import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Spiral.css";

function Spiral() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ----------------------------------
    // Escena y cámara
    // ----------------------------------

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // ----------------------------------
    // Parámetros de la galaxia
    // ----------------------------------

    const particleCount = 18000;
    const armCount = 4;
    const galaxyRadius = 3.6;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);

    // Paleta de colores
    const colorCore = new THREE.Color("#ffffff");
    const colorInner = new THREE.Color("#d49aff");
    const colorOuter = new THREE.Color("#829fff");

    // Distribución gaussiana para una dispersión más natural
    const randomGaussian = () => {
      const u = Math.max(Math.random(), 0.000001);
      const v = Math.random();

      return (
        Math.sqrt(-2 * Math.log(u)) *
        Math.cos(2 * Math.PI * v)
      );
    };

    // ----------------------------------
    // Distribución de partículas
    // ----------------------------------

    for (let i = 0; i < particleCount; i++) {
      const radius =
        Math.pow(Math.random(), 1.15) * galaxyRadius;

      const arm = i % armCount;

      const angle =
        (arm / armCount) * Math.PI * 2 +
        radius * 1.15;

      // Algunas partículas forman una nube difusa
      const isDiffuse = Math.random() < 0.22;
      const diffuseFactor = isDiffuse ? 2.2 : 1;

      // Anchura de los brazos
      const armWidth =
        (0.10 + radius * 0.055) * diffuseFactor;

      // Dispersión radial
      const radialOffset =
        randomGaussian() *
        (0.025 + radius * 0.018) *
        diffuseFactor;

      // Dispersión tangencial
      const tangentialOffset =
        randomGaussian() * armWidth;

      const finalRadius = radius + radialOffset;

      // Coordenadas tridimensionales
      const x =
        Math.cos(angle) * finalRadius -
        Math.sin(angle) * tangentialOffset;

      const y =
        Math.sin(angle) * finalRadius +
        Math.cos(angle) * tangentialOffset;

      // Mayor profundidad en el eje Z
      const z =
        randomGaussian() *
        (0.09 + radius * 0.09) *
        (isDiffuse ? 2 : 1);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Gradiente de color desde el núcleo hacia los brazos
      const t = radius / galaxyRadius;
      const color = colorCore.clone();

      if (t < 0.35) {
        color.lerp(colorInner, t / 0.35);
      } else {
        color.copy(colorInner).lerp(
          colorOuter,
          (t - 0.35) / 0.65
        );
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Tamaño y opacidad de las partículas
      sizes[i] = 0.8 + Math.random() * 1.8;
      alphas[i] = isDiffuse
        ? 0.35 + Math.random() * 0.35
        : 0.7 + Math.random() * 0.3;
    }

    // ----------------------------------
    // Geometría
    // ----------------------------------

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    geometry.setAttribute(
      "aSize",
      new THREE.BufferAttribute(sizes, 1)
    );

    geometry.setAttribute(
      "aAlpha",
      new THREE.BufferAttribute(alphas, 1)
    );

    // ----------------------------------
    // Material de partículas
    // ----------------------------------

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,

      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;

        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          vAlpha = aAlpha;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          gl_PointSize = aSize * (30.0 / -mvPosition.z);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,

      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          float distanceToCenter = distance(
            gl_PointCoord,
            vec2(0.5)
          );

          float glow = 1.0 - smoothstep(
            0.0,
            0.5,
            distanceToCenter
          );

          gl_FragColor = vec4(
            vColor,
            glow * vAlpha
          );
        }
      `,
    });

    const galaxy = new THREE.Points(geometry, material);

    // ----------------------------------
    // Perspectiva e inclinación
    // ----------------------------------

    const baseTiltX = -0.85;
    const baseTiltY = 0.15;

    galaxy.rotation.set(baseTiltX, baseTiltY, 0);

    scene.add(galaxy);

    // ----------------------------------
    // Interacción con el cursor
    // ----------------------------------

    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      targetRotationY = (x - 0.5) * 0.18;
      targetRotationX = (y - 0.5) * 0.12;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener("pointermove", handleMouseMove);
    container.addEventListener("pointerleave", handleMouseLeave);

    // ----------------------------------
    // Animación
    // ----------------------------------

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Rotación ligeramente más rápida
        galaxy.rotation.z += 0.0013;

        // Mantener inclinación y añadir movimiento del cursor
        galaxy.rotation.x +=
          (baseTiltX + targetRotationX - galaxy.rotation.x) * 0.025;

        galaxy.rotation.y +=
          (baseTiltY + targetRotationY - galaxy.rotation.y) * 0.025;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ----------------------------------
    // Adaptación al tamaño de ventana
    // ----------------------------------

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // ----------------------------------
    // Limpieza
    // ----------------------------------

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", handleResize);

      container.removeEventListener("pointermove", handleMouseMove);
      container.removeEventListener("pointerleave", handleMouseLeave);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="spiral-container" ref={mountRef} />;
}

export default Spiral;

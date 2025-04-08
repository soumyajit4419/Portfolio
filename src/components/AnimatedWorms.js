import React, { useEffect, useRef } from "react";

function AnimatedWorms() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const worms = [];
    const numWorms = 60; // Nombre de vers
    const maxSpeed = 2; // Vitesse maximale des vers

    // Palette de couleurs
    const colors = ["#3B3355", "#5D5D81", "#BFCDE0"];

    // Génère des vers aléatoires
    for (let i = 0; i < numWorms; i++) {
      const wormLength = Math.floor(Math.random() * 20) + 15; // Longueur aléatoire (15 à 35 segments)
      const wormWidth = Math.random() * 2 + 2; // Largeur aléatoire (2 à 4 pixels)
      const segments = [];
      for (let j = 0; j < wormLength; j++) {
        segments.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }
      worms.push({
        segments,
        dx: (Math.random() - 0.5) * maxSpeed,
        dy: (Math.random() - 0.5) * maxSpeed,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: wormWidth,
      });
    }

    // Met à jour la position des vers
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      worms.forEach((worm) => {
        const { segments, dx, dy, color, width } = worm;

        // Déplace la tête du ver
        const head = segments[0];
        head.x += dx;
        head.y += dy;

        // Rebondit sur les bords
        if (head.x < 0 || head.x > canvas.width) worm.dx *= -1;
        if (head.y < 0 || head.y > canvas.height) worm.dy *= -1;

        // Déplace les segments pour suivre la tête
        for (let i = segments.length - 1; i > 0; i--) {
          segments[i].x = segments[i - 1].x;
          segments[i].y = segments[i - 1].y;
        }

        // Dessine le ver
        ctx.beginPath();
        ctx.moveTo(segments[0].x, segments[0].y);
        for (let i = 1; i < segments.length; i++) {
          ctx.lineTo(segments[i].x, segments[i].y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      });

      requestAnimationFrame(update);
    }

    // Ajuste la taille du canvas lors du redimensionnement
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeHandler);

    update();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></canvas>
  );
}

export default AnimatedWorms;
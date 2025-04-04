import React, { useEffect, useRef } from "react";

function AnimatedSquares() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const squares = [];
    const numSquares = 50;

    // Palette de couleurs
    const colors = ["#3B3355", "#5D5D81", "#BFCDE0"];

    // Génère des carrés aléatoires
    for (let i = 0; i < numSquares; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 30,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)], // Couleur aléatoire de la palette
      });
    }

    // Met à jour la position des carrés
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      squares.forEach((square) => {
        square.x += square.dx;
        square.y += square.dy;

        // Rebondit sur les bords
        if (square.x < 0 || square.x + square.size > canvas.width)
          square.dx *= -1;
        if (square.y < 0 || square.y + square.size > canvas.height)
          square.dy *= -1;

        ctx.fillStyle = square.color;
        ctx.fillRect(square.x, square.y, square.size, square.size);
      });

      requestAnimationFrame(update);
    }

    // Déplace les carrés lorsqu'ils sont touchés par le curseur
    canvas.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      squares.forEach((square) => {
        const distX = mouseX - (square.x + square.size / 2);
        const distY = mouseY - (square.y + square.size / 2);
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 100) {
          square.dx += distX * 0.01;
          square.dy += distY * 0.01;
        }
      });
    });

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

export default AnimatedSquares;
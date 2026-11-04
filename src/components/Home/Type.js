import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Licenciado en Astronomía",
          "Interesado en Ciencia de Datos",
          "Análisis de Datos Científicos",
          "Apasionado por la Programación",
        ],
        autoStart: true,
        loop: true,
        delay: 25,
        typeSpeed: 3,
        deleteSpeed: 5,
        pauseFor: 700,
      }}
    />
  );
}

export default Type;
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Formación en Astronomía",
          "Ciencia de Datos ",
          "Análisis Computacional",
          "Programación y Tecnología",
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
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "What is the company culture like?",
          "What are the true workhours?",
          "Does the office have female co-workers?",
          "What support is provided to women?",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;

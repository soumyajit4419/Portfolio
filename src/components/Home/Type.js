import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Vision",
          "Natural Language Processing",
          "Backend",
          "Problem Solver",
          // "Business and Product Solutions",
          "Football"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

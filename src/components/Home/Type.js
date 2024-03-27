import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Software Developer"
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: Infinity,
      }}
    />
  );
}

export default Type;

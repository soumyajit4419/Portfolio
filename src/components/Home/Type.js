import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Programmer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;

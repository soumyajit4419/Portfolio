import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Entreprenerd",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Father",
          "Husband",
          "Servant of Allah SWT"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

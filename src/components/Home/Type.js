import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Web Developer",
          "Cloud Engineer",
          "Data Engineer",
          // "MERN Stack Developer",
          // "PERN STACK Developer",
          "AI/ML Enthusiast",
          "Open Source Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

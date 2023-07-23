import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "AI Researcher",
          "Machine Learning Researcher",
          "FARM Stack Developer",
          "Data Scientist",
          "Data Engineer",
          "Quantitative Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

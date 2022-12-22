import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Engineer",
          "Data Scientist",
          "Data Engineer",
          "Software Engineer",
          "Web Developer",
          "MERN Stack Developer",
          "Specialist in developing web applications with Machine Learning API's"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

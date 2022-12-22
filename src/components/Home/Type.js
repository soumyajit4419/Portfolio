import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Machine Learning Engineer",
          "Data Scientist",
          "Data Engineer",
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

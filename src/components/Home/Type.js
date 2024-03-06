import React from "react";
import Typewriter from "typewriter-effect";
//https://www.npmjs.com/package/typewriter-effect for customizations and features 

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Life-Long Learner",
          "Problem-Solver",
          "Technology Explorer",
          "Engineer",
          "Thought Leader",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;

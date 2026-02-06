import React from "react";
import Typewriter from "typewriter-effect";
import { tags } from "../../data/portfolioData";
function Type() {
  return (
    <Typewriter
      options={{
        strings: tags,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

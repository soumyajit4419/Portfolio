import React from "react";
import Typewriter from "typewriter-effect";
import keywords from "../../config/keywords.json";
function Type() {
  return (
    <Typewriter
      options={{
        strings: keywords,
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        cursor: " |",
        devMode: process.env.NODE_ENV !== "production",
      }}
    />
  );
}

export default Type;

import React from "react";
import Typewriter from "typewriter-effect";
import { data } from "../../Constants";

function Type() {
  return (
    <Typewriter
      options={{
        strings: data.roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "25 ans Étudiant développeur logiciel",
          "Passionné par le Trading",
          "et fasciné par les Data",
          "souhaitant me spécialiser en Data Engenering",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

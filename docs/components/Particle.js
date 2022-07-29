import React, { useRef } from "react";
import Particles from "react-tsparticles";
import options from "./options";

function Particle() {
  const container = useRef();

  return (
    <>

      <Particles options={options} container={container} />
    </>
  );
}

export default Particle;

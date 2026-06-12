import React from "react";
import Particles from "react-tsparticles";
import useReducedMotion from "../hooks/useReducedMotion";

function Particle() {
  // if they've asked for less motion, keep the starfield but freeze it —
  // particles still render, they just stop drifting and pulsing.
  const reduced = useReducedMotion();

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: !reduced,
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: !reduced,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },


        },
        particles: {
          color: {
            value: "#ffffff",
          },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

/**
 * This function returns a Particles component that has a bunch of parameters that are used to create a
 * particle effect.
 * @returns A function that returns a Particles component.
 */
import React from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
function Particle() {
  const pRef = React.useRef(null);

  return (
    <Particles
      id="tsparticles"
      ref={pRef}
      // params={{
      //   preset: "triangles",
      //   particles: {
      //     number: {
      //       value: 160,
      //       density: {
      //         enable: true,
      //         value_area: 1500,
      //       },
      //     },
      //     line_linked: {
      //       enable: false,
      //       opacity: 0.03,
      //     },
      //     move: {
      //       direction: "right",
      //       speed: 0.05,
      //     },
      //     size: {
      //       value: 1,
      //     },
      //     opacity: {
      //       anim: {
      //         enable: true,
      //         speed: 1,
      //         opacity_min: 0.05,
      //       },
      //     },
      //   },
      //   interactivity: {
      //     events: {
      //       onclick: {
      //         enable: true,
      //         mode: "push",
      //       },
      //     },
      //     modes: {
      //       push: {
      //         particles_nb: 1,
      //       },
      //     },
      //   },
      //   retina_detect: true,
      // }}
      options={{
        fpsLimit: 60,
        particles: {
          opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                  },
                },
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#f333",
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#00f000"
            },
            polygon: {
              nb_sides: 5
            },
            // image: {
            //   src: "https://cdn.matteobruni.it/images/particles/github.svg",
            //   width: 100,
            //   height: 100
            // }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 3,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "random",
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              color: "#ffffff",
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          // detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            // onclick: {
            //   enable: true,
            //   mode: ["push", "remove"],
            // },
           
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 150
            },
            push: {
              particles_nb: 3,
              
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        // background: {
        //   color: "#000000",
        //   image: "",
        //   position: "50% 50%",
        //   repeat: "no-repeat",
        //   size: "cover"
        // }
      }}
      init={e => {
        
      }}
      />
  );
}


export default Particle;

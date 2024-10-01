import React from 'react'
import Particles from 'react-tsparticles'
import '../styles/Particle.css'

function Particle() {
  return (
    <Particles
      id="tsparticles"
      data-testid="particle-component"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: false,
            opacity: 0.03
          },
          move: {
            direction: 'right',
            speed: 0.05
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
  )
}

export default Particle

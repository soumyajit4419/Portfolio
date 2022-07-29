const options = {
    fullScreen: {
      enable: true
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#ffffff"
          },
          particles: {
            color: {
              value: ["#57068c", "#0000ff"]
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#ffffff"
          },
          particles: {
            color: {
              value: ["#57068c", "#0000ff"]
            }
          }
        }
      }
    ],
    fpsLimit: 60,
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: ["circle", "square"]
      },
      opacity: {
        value: 1
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 5
        }
      },
      rotate: {
        value: 0,
        direction: "random",
        animation: {
          speed: 5,
          enable: true
        }
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    detectRetina: true
  };
  
  export default options;
  
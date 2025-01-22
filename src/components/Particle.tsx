import React from "react";
import Particles from "react-tsparticles";
import type { ISourceOptions } from "tsparticles-engine"; // Correct import for options type

const Particle: React.FC = () => {
  const particlesOptions: ISourceOptions = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      links: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };

  return <Particles id="tsparticles" options={particlesOptions} />;
};

export default Particle;
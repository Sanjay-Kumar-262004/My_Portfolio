import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
<Particles
  id="tsparticles"
  options={{
    background: { color: "transparent" },
    particles: {
      number: { value: 200, density: { enable: true, value_area: 1000 } },
      color: { value: ["#ff6ec7", "#00f5d4", "#ffdd00"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.7,
        random: true,
        anim: { enable: true, speed: 2, opacity_min: 0.3 },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.5 },
      },
      move: {
        enable: true,
        speed: 0.6,
        random: true,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: {
        grab: { distance: 120, line_linked: { opacity: 0.5 } },
      },
    },
    retina_detect: true,
  }}
/>

  );
}

export default Particle;

// SYMBOLS //
{/* <Particles
  id="tsparticles"
  options={{
    particles: {
      number: { value: 60 },
      shape: {
        type: "char",
        character: {
          value: ["S", "K", "{ }", "< />"], // customize with your initials / symbols
          font: "Verdana",
          style: "",
          weight: "400",
        },
      },
      size: { value: 20, random: true },
      opacity: { value: 0.5 },
      move: { enable: true, speed: 1, random: true },
    },
  }}
/> */}



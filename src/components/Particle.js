import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, value_area: 800 } },
          color: { value: ["#008DDA", "#41C9E2", "#ACE2E1", "#00c8ff", "#005f99"] },
          shape: {
            type: "char",
            character: {
              value: ["Ω", "⏚", "0", "1", "⊕", "→", "⚡", "∿", "≡", "⊖", "A", "V", "⌂", "⊗", "∞"],
              font: "Verdana",
              style: "",
              weight: "400",
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false },
          },
          size: {
            value: 16,
            random: true,
            anim: { enable: false },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            bounce: false,
            attract: { enable: false },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 140, duration: 0.4, speed: 1 },
            grab: {
              distance: 180,
              line_linked: { opacity: 0.6 },
            },
            push: { particles_nb: 5 },
            bubble: {
              distance: 200,
              size: 20,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

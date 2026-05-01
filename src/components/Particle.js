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
          number: { value: 70, density: { enable: true, value_area: 900 } },
          color: { value: ["#008DDA", "#41C9E2", "#ACE2E1", "#00c8ff", "#005f99"] },
          shape: {
            type: "char",
            character: {
              // Electrical & automation symbols
              value: ["⚡", "⌁", "🔌", "🔋", "💡", "⚙", "🛠", "⚙️", "⏻", "⏼", "⏽", "⏾", "⏚", "⏧", "⎓", "∿", "Ω", "℧", "⧑", "⧒", "⧓", "⧔", "⧕", "⧖", "⧗", "⊕", "⊗", "⌖", "⌗", "⌀", "⌑", "⌨", "⍔", "⍕", "⍖", "⍗", "📶", "☎", "⏏", "⍰", "☠"],
              font: "Verdana",
              style: "",
              weight: "400",
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.6, opacity_min: 0.15, sync: false },
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
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: { enable: true, mode: ["repulse", "grab"] },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            grab: {
              distance: 160,
              line_linked: { opacity: 0.35 },
            },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

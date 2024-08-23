import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: white; font-size: 2rem;">I DO </span><span style="color: white; font-size: 2rem;">Code</span>')
            .pauseFor(1000)
            .deleteChars(4)
            .typeString('<span style="color: white; font-size: 2rem;">Read Books</span>')
            .pauseFor(1000)
            .deleteChars(10)
            .typeString('<span style="color: white; font-size: 2rem;">Develop Sites</span>')
            .pauseFor(1000)
            .deleteChars(13)
            .typeString('<span style="color: white; font-size: 2rem;">Follow Tech</span>')
            .pauseFor(1000)
            .deleteChars(11)
            .typeString('<span style="color: white; font-size: 2rem;">Represent My Class</span>')
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
}

export default Type;

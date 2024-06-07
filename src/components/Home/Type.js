import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('<span style="color: white;">I DO </span>Code')
          .pauseFor(1000)
          .deleteChars(4)
          .typeString('Read books')
          .pauseFor(1000)
          .deleteChars(10)
          .typeString('Develop sites')
          .pauseFor(1000)
          .deleteChars(13)
          .typeString('Manage the class')
          .pauseFor(1000)
          .start();
      }}
    />
  );
}

export default Type;

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
          .typeString('Read Books')
          .pauseFor(1000)
          .deleteChars(10)
          .typeString('Develop Sites')
          .pauseFor(1000)
          .deleteChars(13)
          .typeString('Follow Tech')
          .pauseFor(1000)
          .deleteChars(11)
          .typeString('Manage The Class')
          .pauseFor(1000)
          .start();
      }}
    />
  );
}

export default Type;

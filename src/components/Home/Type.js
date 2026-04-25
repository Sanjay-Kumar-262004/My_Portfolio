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
          .typeString('<span style="color: white;">I DO </span>PLC Programming')
          .pauseFor(1000)
          .deleteChars(15)
          .typeString('SCADA Development')
          .pauseFor(1000)
          .deleteChars(17)
          .typeString('HMI Design')
          .pauseFor(1000)
          .deleteChars(10)
          .typeString('Industrial Automation')
          .pauseFor(1000)
          .deleteChars(21)
          .start();
      }}
    />
  );
}

export default Type;

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Sanjay Kumar S</span>, an Electronics and Communication Engineering graduate from <span className="purple">SRM Institute of Science and Technology, KTR Campus</span>, with a strong focus on <span className="purple">Industrial Automation</span>.
            <br />
            <br />
            I have developed practical knowledge in electrical systems, HVAC controls, and automation technologies involving <span className="purple">PLC-based control logic, field instrumentation, and smart building automation</span>. My experience includes understanding sensor integration, signal scaling, control panel concepts, and automation workflows used in industrial and infrastructure environments.
            <br />
            <br />
            I am particularly interested in <span className="purple">Industrial Automation and Smart Infrastructure solutions</span>, where control systems, energy efficiency, and intelligent monitoring play a critical role in operational excellence.
            <br />
            <br />
            I am continuously strengthening my technical foundation in <span className="purple">PLC systems, control strategies, and automation engineering</span> to bridge the gap between electrical engineering principles and real-world industrial applications.
          </p>
        </blockquote>

        <div className="typewriter-section">
          <div className="typewriter-container">
            <p style={{ margin: 0 }}>
              "There will always be hurdles in life, but if you want to achieve a goal, you must continue." - Malala Yousafzai
            </p>
          </div>
        </div>
      </Card.Body>

      <style jsx>{`
        /* Typewriter Section Styles */
        .typewriter-section {
          margin-top: 30px;
          padding: 20px 0;
          width: 100%;
          clear: both;
          position: relative;
          z-index: 100;
        }

        .typewriter-container {
          color: rgb(155, 126, 172);
          font-size: 0.9rem;
          padding: 20px;
          text-align: center;
          position: relative;
          z-index: 101;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          line-height: 1.6;
          font-style: italic;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          border-radius: 8px;
          background: rgba(155, 126, 172, 0.05);
          border: 1px solid rgba(155, 126, 172, 0.2);
        }

        /* Card and Layout Fixes */
        .quote-card-view {
          position: relative;
          z-index: 1;
          overflow: visible;
          width: 100%;
        }

        .quote-card-view .card-body {
          position: relative;
          z-index: 2;
          padding: 20px;
          width: 100%;
          box-sizing: border-box;
        }

        /* Mobile Responsive Fixes */
        @media (max-width: 768px) {
          .typewriter-section {
            margin-top: 25px;
            padding: 15px 0;
          }

          .typewriter-container {
            font-size: 0.8rem;
            padding: 15px 10px;
            line-height: 1.5;
            margin: 0;
            background: rgba(155, 126, 172, 0.08);
            border: 1px solid rgba(155, 126, 172, 0.3);
          }

          .quote-card-view .card-body {
            padding: 15px;
          }
        }

        @media (max-width: 576px) {
          .typewriter-section {
            margin-top: 20px;
            padding: 10px 0;
          }

          .typewriter-container {
            font-size: 0.75rem;
            padding: 12px 8px;
            line-height: 1.4;
            margin: 0;
            background: rgba(155, 126, 172, 0.1);
            border: 1px solid rgba(155, 126, 172, 0.4);
            white-space: normal;
            word-break: break-word;
          }

          .quote-card-view .card-body {
            padding: 12px;
          }
        }

        @media (max-width: 480px) {
          .typewriter-section {
            margin-top: 15px;
            padding: 8px 0;
          }

          .typewriter-container {
            font-size: 0.7rem;
            padding: 10px 6px;
            line-height: 1.3;
            margin: 0;
            background: rgba(155, 126, 172, 0.12);
            border: 1px solid rgba(155, 126, 172, 0.5);
          }
        }

        @media (max-width: 360px) {
          .typewriter-section {
            margin-top: 10px;
            padding: 5px 0;
          }

          .typewriter-container {
            font-size: 0.65rem;
            padding: 8px 4px;
            line-height: 1.2;
            margin: 0;
            background: rgba(155, 126, 172, 0.15);
            border: 1px solid rgba(155, 126, 172, 0.6);
          }

          .quote-card-view .card-body {
            padding: 8px;
          }
        }

        /* Text handling for typewriter */
        .typewriter-container span,
        .typewriter-container div {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
          display: inline !important;
        }

        /* Hide typewriter cursor completely */
        .Typewriter__cursor {
          display: none !important;
        }

        /* Ensure proper spacing between elements */
        blockquote p {
          margin-bottom: 0;
        }

        /* Force proper text wrapping */
        .typewriter-container * {
          color: rgb(155, 126, 172) !important;
          opacity: 1 !important;
          visibility: visible !important;
          white-space: normal !important;
          word-break: break-word !important;
        }

        /* Prevent container overflow */
        .typewriter-section,
        .typewriter-container {
          overflow: visible;
          max-width: 100%;
        }

        /* Additional safety for very small screens */
        @media (max-width: 320px) {
          .typewriter-container {
            font-size: 0.6rem;
            padding: 6px 2px;
            line-height: 1.1;
          }
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;

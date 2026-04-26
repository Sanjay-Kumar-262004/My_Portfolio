import React, { useRef, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Typewriter from "typewriter-effect";

const QUOTE = '"There will always be hurdles in life, but if you want to achieve a goal, you must continue." — Malala Yousafzai';

function AboutCard() {
  const [startTyping, setStartTyping] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    const node = quoteRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Sanjay Kumar S</span>, an Electronics and Communication Engineering graduate from <span className="purple">SRM Institute of Science and Technology, KTR Campus</span>, with a strong focus on <span className="purple">Industrial Automation</span>.
            <br /><br />
            I have developed practical knowledge in electrical systems, HVAC controls, and automation technologies involving <span className="purple">PLC-based control logic, field instrumentation, and smart building automation</span>. My experience includes understanding sensor integration, signal scaling, control panel concepts, and automation workflows used in industrial and infrastructure environments.
            <br /><br />
            I am particularly interested in <span className="purple">Industrial Automation and Smart Infrastructure solutions</span>, where control systems, energy efficiency, and intelligent monitoring play a critical role in operational excellence.
            <br /><br />
            I am continuously strengthening my technical foundation in <span className="purple">PLC systems, control strategies, and automation engineering</span> to bridge the gap between electrical engineering principles and real-world industrial applications.
          </p>
        </blockquote>

        {/* Quote — animates letter-by-letter when scrolled into view, runs once */}
        <div ref={quoteRef} className="typewriter-section">
          <div className="typewriter-container">
            {startTyping ? (
              <div className="typewriter-inner">
                <Typewriter
                  options={{
                    loop: false,
                    delay: 35,
                    deleteSpeed: Infinity,
                    cursor: "|",
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString(QUOTE).start();
                  }}
                />
              </div>
            ) : (
              /* Placeholder keeps height consistent before animation starts */
              <span style={{ opacity: 0, whiteSpace: "pre-wrap", display: "block" }}>{QUOTE}</span>
            )}
          </div>
        </div>
      </Card.Body>

      <style jsx>{`
        .typewriter-section {
          margin-top: 30px;
          padding: 20px 0;
          width: 100%;
        }

        .typewriter-container {
          color: rgb(155, 126, 172);
          font-size: 0.9rem;
          padding: 20px;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
          line-height: 1.6;
          font-style: italic;
          border-radius: 8px;
          background: rgba(155, 126, 172, 0.05);
          border: 1px solid rgba(155, 126, 172, 0.2);
          height: auto !important;
          display: block !important;
          overflow: visible !important;
        }

        .typewriter-inner {
          width: 100%;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          display: block !important;
        }

        /* Cursor stays visible and blinks after typing — 'waiting to type' feel */
        .typewriter-container .Typewriter__cursor {
          font-size: 0.9rem !important;
          color: rgb(155, 126, 172) !important;
          font-style: italic !important;
          animation: blink-quote-cursor 1.1s step-end infinite !important;
          display: inline-block !important;
        }

        @keyframes blink-quote-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Force typewriter text colour and wrapping to match theme */
        .typewriter-container .Typewriter__wrapper {
          color: rgb(155, 126, 172) !important;
          font-size: 0.9rem !important;
          font-style: italic !important;
          font-weight: 400 !important;
          white-space: normal !important;
          word-break: break-word !important;
          display: inline !important;
        }

        .quote-card-view {
          position: relative;
          z-index: 1;
          overflow: visible;
          width: 100%;
        }

        .quote-card-view .card-body {
          padding: 20px;
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .typewriter-container {
            font-size: 0.8rem;
            padding: 15px 10px;
          }
        }

        @media (max-width: 576px) {
          .typewriter-container {
            font-size: 0.75rem;
            padding: 12px 8px;
          }

          .quote-card-view .card-body {
            padding: 12px;
          }
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;

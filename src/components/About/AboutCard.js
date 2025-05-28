import React from "react";
import Card from "react-bootstrap/Card";
import Typewriter from "typewriter-effect";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Sanjay Kumar S </span>, a dedicated <span className="purple">Electronics and Communication Engineering</span> graduate from <span className="purple">SRM University's KTR campus </span>
            from <span className="purple"> Tamilnadu, India </span>.
            Throughout my academic journey, I have cultivated a passion for Technology-Driven Problem-Solving and Innovative solutions. As an aspiring developer, I am steadfast in honing my skills in <span className="purple">Programming and Web Development</span> . I received <span className="purple">The Best Student Award</span> from <span className="purple">The Institution of Engineers (India)</span> and <span className="purple">Chancellor's Award for Excellence in Undergraduate Research 2025</span> from SRMIST, which reflects my dedication to both academic and extracurricular activities.
            My unique background in Electronics and Communication Engineering, coupled with my burgeoning expertise in Web Development, positions me as a <span className="purple">quick learner and a committed team player</span>. I actively pursue new challenges that not only foster my personal growth but also allow me to expand my skill set. I am confident that my technical acumen, paired with adept problem-solving abilities, renders me a valuable asset to any team.
          </p>
        </blockquote>

        {/* Typewriter section with proper mobile handling */}
        <div className="typewriter-section">
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "There will always be hurdles in life, but if you want to achieve a goal, you must continue. - Malala Yousafzai."
                ],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: Infinity,
                cursor: '',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("There will always be hurdles in life, but if you want to achieve a goal, you must continue. - Malala Yousafzai.")
                  .pauseFor(1000)
                  .callFunction(() => {
                    const cursor = document.querySelector('.Typewriter__cursor');
                    if (cursor) {
                      cursor.style.display = 'none';
                    }
                  })
                  .start();
              }}
            />
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

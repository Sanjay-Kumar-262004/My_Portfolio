import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import Typewriter from "typewriter-effect";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Sanjay Kumar S </span>, a dedicated <span className="purple">Electronics and Communication Engineering</span> graduate from <span className="purple">SRM University's KTR campus </span>
            from <span className="purple"> Tamilnadu, India </span>.
            Throughout my academic journey, I have cultivated a passion for Technology-Driven Problem-Solving and Innovative solutions. As an aspiring developer, I am steadfast in honing my skills in <span className="purple">Programming and Web Development</span> . I received <span className="purple">The Best Student Award</span> from <span className="purple">The Institution of Engineers (India)</span> which reflects my dedication to both academic and extracurricular activities.
            My unique background in Electronics and Communication Engineering, coupled with my burgeoning expertise in Web Development, positions me as a <span className="purple">quick learner and a committed team player</span>. I actively pursue new challenges that not only foster my personal growth but also allow me to expand my skill set. I am confident that my technical acumen, paired with adept problem-solving abilities, renders me a valuable asset to any team.
          </p>

          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "There will always be hurdles in life, but if you want to achieve a goal, you must continue. - Malala Yousafzai."
                ],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: Infinity, // Prevents deletion
                cursor: '',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("There will always be hurdles in life, but if you want to achieve a goal, you must continue. - Malala Yousafzai.")
                  .pauseFor(1000)
                  .callFunction(() => {
                    // Remove cursor after typing is complete
                    const cursor = document.querySelector('.Typewriter__cursor');
                    if (cursor) {
                      cursor.style.display = 'none';
                    }
                  })
                  .start();
              }}
            />
          </div>

        </blockquote>
      </Card.Body>

      <style jsx>{`
        .typewriter-container {
          color: rgb(155 126 172);
          margin-top: 20px;
          font-size: 0.85rem;
          padding: 10px;
          text-align: center;
          position: relative;
          z-index: 10;
          background-color: transparent;
          clear: both;
          width: 100%;
          box-sizing: border-box;
        }

        /* Ensure proper spacing and prevent overlap */
        .quote-card-view {
          position: relative;
          z-index: 1;
        }

        .quote-card-view .card-body {
          position: relative;
          z-index: 2;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .typewriter-container {
            font-size: 0.75rem;
            margin-top: 25px;
            padding: 15px 10px;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .typewriter-container {
            font-size: 0.7rem;
            margin-top: 30px;
            padding: 20px 8px;
            line-height: 1.5;
          }
        }

        /* Additional mobile fixes */
        @media (max-width: 576px) {
          .quote-card-view {
            margin-bottom: 30px;
          }
          
          .typewriter-container {
            margin-top: 35px;
            margin-bottom: 20px;
            padding: 25px 10px;
            font-size: 0.68rem;
          }
        }

        /* Prevent text wrapping issues */
        .typewriter-container span {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        /* Hide typewriter cursor after completion */
        .Typewriter__cursor {
          animation: none !important;
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;

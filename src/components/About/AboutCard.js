import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Typewriter from "typewriter-effect";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Sanjay Kumar S </span>, a dedicated <span className="purple">Electronics and Communication Engineering</span> student at <span className="purple">SRM University's KTR campus </span>
            from <span className="purple"> Tamilnadu, India </span>.
            Throughout my academic journey, I have cultivated a passion for Technology-Driven Problem-Solving and Innovative solutions. As an aspiring developer, I am steadfast in honing my skills in <span className="purple">Programming and Web Development</span> . I received <span className="purple">The Best Student Award</span> from <span className="purple">The Institution of Engineers (India)</span> which reflects my dedication to both academic and extracurricular activities.
            My unique background in Electronics and Communication Engineering, coupled with my burgeoning expertise in Web Development, positions me as a <span className="purple">quick learner and a committed team player</span>. I actively pursue new challenges that not only foster my personal growth but also allow me to expand my skill set. I am confident that my technical acumen, paired with adept problem-solving abilities, renders me a valuable asset to any team.
          </p>

          <div style={{ color: "rgb(155 126 172)", marginTop: "20px", fontSize: "0.85rem" }}>
            <Typewriter
              options={{
                strings: [
                  "There will always be hurdles in life, but if you want to achieve a goal, you must continue. - Malala Yousafzai."
                ],
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

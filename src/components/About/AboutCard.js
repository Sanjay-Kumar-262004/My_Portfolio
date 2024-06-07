import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings, I am <span className="purple">Sanjay Kumar S </span>, a dedicated <span className="purple">Electronics and Communication Engineering</span> student at <span className="purple">SRM University's KTR campus </span>
            from <span className="purple"> Tamilnadu, India </span>.
           Throughout my academic journey, I have cultivated a passion for Technology-Driven Problem-Solving and Innovative solutions.  As an aspiring developer, I am steadfast in honing my skills in <span className="purple">Programming and Web Development .</span>  I received <span className="purple">The Best Student Award</span> from <span className="purple">The Institution of Engineers (India)</span> which reflects my dedication to both academic and extracurricular activities.
            My unique background in Electronics and Communication Engineering, coupled with my burgeoning expertise in Web Development, positions me as a quick learner and a committed team player. I actively pursue new challenges that not only foster my personal growth but also allow me to expand my skill set. I am confident that my technical acumen, paired with adept problem-solving abilities, renders me a valuable asset to any team.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

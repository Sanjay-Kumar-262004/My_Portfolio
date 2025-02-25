import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";
import Tilt from "react-parallax-tilt";
import Toolstack from "./Toolstack";
import AcademicPerformance from "./AcademicPerformance";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
      md={5}
      style={{ paddingTop: "10px", paddingBottom: "50px", borderRadius: "5px" }}
      className="about-img"
    >
      <Tilt>
        <img src={laptopImg} alt="about" className="img-fluid" style={{ borderRadius: "50%" }} />
      </Tilt>
    </Col>
        </Row>
        <h1 className="project-heading">
          Academic <strong className="purple">Performance </strong>
        </h1>
        <AcademicPerformance />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

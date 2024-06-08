import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import webture from "../../Assets/Projects/webture.jpg";
import decode from "../../Assets/Projects/decode.jpg";
import sensors from "../../Assets/Projects/sensors.jpg";
import ecobin from "../../Assets/Projects/ecobin.jpg";
import volunteer1 from "../../Assets/Projects/coordinator1.jpg";
import volunteer1_2 from "../../Assets/Projects/coordinator2.jpg";
import volunteer2 from "../../Assets/Projects/PDP Certificate.jpeg";
import volunteer3 from "../../Assets/Projects/abet.jpg";
import volunteer4 from "../../Assets/Projects/conclave.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Workshops & Hackathons</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Workshops & Hackathons I've attended
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webture}
              isProject={false}
              title={<strong className="purple">WEBTURE</strong>}
              description="Completed a comprehensive Web Development bootcamp conducted by IEEE SRMIST Student Branch. The program covered a wide range of topics including HTML, CSS, JavaScript, and various web development frameworks. Throughout the course, I gained hands-on experience working on various projects, which helped me build a strong foundation in web development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decode}
              isProject={false}
              title={<strong className="purple">DECODE HOUR</strong>}
              description="Participated in a Codeathon conducted by Newton School Coding Club SRMIST and it was an incredible experience! The mentors and organizers provided invaluable guidance, making the entire experience both educational and enjoyable. Competing alongside talented coders from diverse backgrounds was truly inspiring and has motivated me to continue honing my programming abilities."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sensors}
              isProject={false}
              title={<strong className="purple">Sensors and IoT For Smart Healthcare</strong>}
              description="Participated in a Workshop conducted by IE(I) on the Topic Sensors & IoT for Smart Healthcare and gained hands-on experience! The workshop provided deep insights into the integration of sensors and IoT technologies in healthcare, highlighting their potential to revolutionize patient monitoring and healthcare delivery. Engaging with industry experts allowed me to explore practical applications and network with like-minded professionals."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecobin}
              isProject={false}
              title={<strong className="purple">ECOBIN HACKATHON</strong>}
              description="Participated in the 'Smart ECOBIN Hackathon' along with my teammates Rohan Reddy and Shivaram Kumar V.R, organized on 'Engineers Day - 23' by the Department of Mechanical Engineering at SRM Institute of Science and Technology (SRMIST). It was an incredible experience collaborating with talented individuals to innovate and develop sustainable solutions for a cleaner and greener future. During the Smart ECOBIN Hackathon, I had the privilege of witnessing some truly innovative ideas from fellow teams."
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          <strong className="purple">Volunteering</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some volunteering activities I've been involved in
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isProject={false}
              title={<strong className="purple">Emerging Trends in IoT and It's Applications</strong>}
              slides={
                <Slide autoplay={false}>
                  <div className="each-slide-effect">
                    <div
                      style={{
                        backgroundImage: `url(${volunteer1})`,
                        backgroundPosition: 'center',
                        height: '300px'
                      }}
                    >
                    </div>
                  </div>
                  <div className="each-slide-effect">
                    <div
                      style={{
                        backgroundImage: `url(${volunteer1_2})`,
                        backgroundPosition: 'center',
                        height: '300px'
                      }}
                    >
                    </div>
                  </div>
                </Slide>
              }
              descriptionText="I Was one of the Student Coordinators for engaging an informative workshop: 'Emerging Trends in IoT and its Applications', a 6-day workshop organized by the ECE SRMIST KTR Department as part of SRMIST KTR'S Professional Development Programme."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer2}
              isProject={false}
              title={<strong className="purple">Emerging Trends in Artificial Intelligence</strong>}
              description="I Was one of the Student Coordinators for engaging an informative workshop: 'Emerging Trends in Artificial Intelligence', a 3-day workshop organized by the ECE SRMIST KTR Department as part of SRMIST KTR'S Professional Development Programme."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer3}
              isProject={false}
              title={<strong className="purple">ABET Accrediation</strong>}
              description="I held the position of Student Representative for ABET Accreditation in the ECE Department at SRMIST, KTR, contributing in a professional capacity specifically tailored to the accreditation requirements for the ECE department."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer4}
              isProject={false}
              title={<strong className="purple">RAEEUCCI-2023</strong>}
              description="I was one of the representative to attend The 2nd International conference on 'Recent Advances in Electrical, Electronics, Ubiquitous Communication, and Computational Intelligence' (RAEEUCCI-2023) Industry Conclave."
            />
          </Col>
        </Row>
        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          <strong className="purple">Internships & Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some internships and projects I've been involved in
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={internship1}
              title={<strong className="purple">Internship at XYZ Company</strong>}
              description="Completed a summer internship at XYZ Company where I worked on developing and optimizing algorithms for data processing. Gained valuable experience in software development and teamwork."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={internship2}
              title={<strong className="purple">Capstone Project: Smart Home System</strong>}
              description="Worked on a capstone project to develop a Smart Home System using IoT technologies. The project involved designing and implementing a network of sensors and actuators to automate and monitor home appliances."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

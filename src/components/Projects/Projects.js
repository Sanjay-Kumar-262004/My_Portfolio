import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import webture from "../../Assets/Projects/webture.jpg";
import decode from "../../Assets/Projects/decode.jpg";
import sensors from "../../Assets/Projects/sensors.jpg";
import sensors2 from "../../Assets/Projects/sensors2.jpg";
import ecobin from "../../Assets/Projects/ecobin.jpg";
import ecobin2 from "../../Assets/Projects/ecobin2.jpg";
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
              description={(
                <span>
                  Completed a comprehensive <strong className="purple">Web Development</strong> bootcamp conducted by IEEE SRMIST Student Branch. The program covered a wide range of topics including <strong className="purple">HTML, CSS, JavaScript</strong>, and various web development frameworks. Throughout the course, I gained hands-on experience working on various projects, which helped me build a strong foundation in web development.
                </span>
              )}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decode}
              isProject={false}
              title={<strong className="purple">DECODE HOUR</strong>}
              description={( 
                <span>Participated in a <strong className="purple">Codeathon</strong> conducted by Newton School Coding Club SRMIST and it was an incredible experience! The mentors and organizers provided invaluable guidance, making the entire experience both educational and enjoyable. Competing alongside talented coders from diverse backgrounds was <strong className="purple">truly inspiring</strong> and has motivated me to continue honing my programming abilities.
                </span>
              )}
            />
          </Col>
          
          <Col md={4} className="project-card">
  <ProjectCard
    isProject={false}
    title={<strong className="purple">Sensors and IoT For Smart Healthcare</strong>}
    slides={
      <Slide autoplay={false}>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${sensors})`,
              backgroundPosition: 'center',
              height: '300px'
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${sensors2})`,
              backgroundPosition: 'center',
              height: '300px'
            }}
          >
          </div>
        </div>
      </Slide>
    }
    description={( 
      <span>
        Participated in a Workshop conducted by <strong className="purple">IE(I)</strong> on the Topic Sensors & IoT for Smart Healthcare and gained hands-on experience! The workshop provided deep insights into the <strong className="purple">integration of sensors and IoT technologies</strong> in healthcare, highlighting their potential to revolutionize patient monitoring and healthcare delivery. Engaging with industry experts allowed me to explore practical applications and network with like-minded professionals.
      </span>
    )}
  />
</Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              isProject={false}
              title={<strong className="purple">ECOBIN HACKATHON</strong>}
              slides={
                <Slide autoplay={false}>
                  <div className="each-slide-effect">
                    <div
                      style={{
                        backgroundImage: `url(${ecobin})`,
                        backgroundPosition: 'center',
                        height: '300px'
                      }}
                    >
                    </div>
                  </div>
                  <div className="each-slide-effect">
                    <div
                      style={{
                        backgroundImage: `url(${ecobin2})`,
                        backgroundPosition: 'center',
                        height: '300px'
                      }}
                    >
                    </div>
                  </div>
                </Slide>
              }
              description={(
                <span>
                  Participated in the 'Smart ECOBIN Hackathon' along with my teammates&nbsp;
                  <strong className="purple">
                    <a href="https://www.linkedin.com/in/rohanrdy/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                      Rohan Reddy
                    </a>
                  </strong>&nbsp;and&nbsp;
                  <strong className="purple">
                    <a href="https://www.linkedin.com/in/shivaram-kumar-v-r-b75919257/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                      Shivaram Kumar V.R
                    </a>
                  </strong>, organized on 
                  <strong className="purple">'Engineers Day - 23'</strong> by the Department of Mechanical Engineering at SRM Institute of Science and Technology (SRMIST). It was an incredible experience collaborating with talented individuals to innovate and develop sustainable solutions for a cleaner and greener future. During the Smart ECOBIN Hackathon, I had the privilege of witnessing some 
                  <strong className="purple">&nbsp;truly innovative ideas</strong> from fellow teams.
                </span>
              )}
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
              description={(
                <span>
                I Was one of the <strong className="purple">Student Coordinators</strong> for engaging an informative workshop: 'Emerging Trends in IoT and its Applications', a <strong className="purple">6-day workshop</strong> organized by the ECE SRMIST KTR Department as part of SRMIST KTR'S Professional Development Programme.
                </span>
                )}
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer2}
              isProject={false}
              title={<strong className="purple">Emerging Trends in Artificial Intelligence</strong>}
              description={(
                <span>I Was one of the <strong className="purple">Student Coordinators</strong> for engaging an informative workshop: 'Emerging Trends in Artificial Intelligence', a <strong className="purple">3-day workshop</strong> organized by the ECE SRMIST KTR Department as part of SRMIST KTR'S Professional Development Programme.
            </span>
            )}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer3}
              isProject={false}
              title={<strong className="purple">ABET Accrediation</strong>}
              description={(
                <span>I held the position of <strong className="purple">Student Representative for ABET Accreditation</strong> in the ECE Department at SRMIST, KTR, contributing in a professional capacity specifically tailored to the accreditation requirements for the ECE department.
            </span>
            )}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volunteer4}
              isProject={false}
              title={<strong className="purple">RAEEUCCI-2023</strong>}
              description={(
                <span>I was one of the representative to attend <strong className="purple">The 2nd International conference</strong> on 'Recent Advances in Electrical, Electronics, Ubiquitous Communication, and Computational Intelligence' <strong className="purple">(RAEEUCCI-2023)</strong> Industry Conclave."
            </span>
            )}
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

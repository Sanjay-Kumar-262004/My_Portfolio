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
import Intern1 from "../../Assets/Projects/BharatIntern.jpg";
import Intern1_2 from "../../Assets/Projects/CodeClause1.jpg";
import Intern1_3 from "../../Assets/Projects/CodeClause2.jpg";
import Intern2 from "../../Assets/Projects/Salesforce.jpg";
import Intern3 from "../../Assets/Projects/Juniper.jpg";
import Intern4 from "../../Assets/Projects/WSA.jpg";

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
                <span>
                  I Was one of the <strong className="purple">Student Coordinators</strong> for engaging an informative workshop: 'Emerging Trends in Artificial Intelligence', a <strong className="purple">3-day workshop</strong> organized by the ECE SRMIST KTR Department as part of SRMIST KTR'S Professional Development Programme.
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
          <strong className="purple">Internships</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the internships I've completed
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    isProject={false}
    title={<strong className="purple">Internship at CodeClause & Bharat Intern</strong>}
    slides={
      <div>
        <Slide autoplay={false}>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Intern1})`,
                backgroundPosition: 'center',
                height: '300px',
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Intern1_2})`,
                backgroundPosition: 'center',
                height: '300px',
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Intern1_3})`,
                backgroundPosition: 'center',
                height: '300px',
              }}
            >
            </div>
          </div>
        </Slide>
        <div style={{ marginTop: '15px', color: 'white' }}>
          <span>
            Created <strong className="purple">attractive user interfaces</strong> utilizing front-end technologies to enhance user experience and drive a 25% increase in website conversions.
          </span>
        </div>
      </div>
    }
  />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Intern2}
              isProject={false}
              title={<strong className="purple">Salesforce Virtual Internship</strong>}
              description={(
                <span>
                  Completed the <strong className="purple">Salesforce Virtual Internship</strong>, gaining hands-on experience in CRM and cloud-based solutions.
                </span>
              )}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Intern3}
              isProject={false}
              title={<strong className="purple">Juniper Networks Virtual Internship</strong>}
              description={(
                <span>
                  Completed a virtual internship at <strong className="purple">Juniper Networks</strong>, specializing in networking and cybersecurity.
                </span>
              )}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Intern4}
              isProject={false}
              title={<strong className="purple">WSA Internship</strong>}
              description={(
                <span>
                  Contributed to <strong className="purple">Web Security</strong> projects, gaining valuable insights into cybersecurity.
                </span>
              )}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

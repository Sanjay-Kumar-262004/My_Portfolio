import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { FaArrowUp } from 'react-icons/fa';

// Import images
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

// New Images
import delivery_robot from "../../Assets/Projects/delivery_robot_1777094182633.png";
import v2v_ultrasonic from "../../Assets/Projects/v2v_ultrasonic_1777094202935.png";
import plc_sorting from "../../Assets/Projects/plc_sorting_1777094218721.png";
import rockwell_intern from "../../Assets/Projects/rockwell_intern_1777094535758.png";

function Projects() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('web-projects');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      setShowScrollTop(scrollTop > 300);

      const webProjectsSection = document.getElementById('web-projects');
      const internshipsSection = document.getElementById('internships');
      const workshopsSection = document.getElementById('workshops');
      const volunteeringSection = document.getElementById('volunteering');

      if (webProjectsSection && internshipsSection && workshopsSection && volunteeringSection) {
        const webProjectsTop = webProjectsSection.offsetTop;
        const internshipsTop = internshipsSection.offsetTop;
        const workshopsTop = workshopsSection.offsetTop;
        const volunteeringTop = volunteeringSection.offsetTop;

        if (scrollTop >= volunteeringTop - 100) {
          setCurrentSection('volunteering');
        } else if (scrollTop >= workshopsTop - 100) {
          setCurrentSection('workshops');
        } else if (scrollTop >= internshipsTop - 100) {
          setCurrentSection('internships');
        } else {
          setCurrentSection('web-projects');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    let targetSection;
    switch (currentSection) {
      case 'volunteering':
        targetSection = 'workshops';
        break;
      case 'workshops':
        targetSection = 'internships';
        break;
      case 'internships':
        targetSection = 'web-projects';
        break;
      default:
        targetSection = 'web-projects';
    }

    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSectionLabel = () => {
    switch (currentSection) {
      case 'volunteering':
        return 'Go to Workshops';
      case 'workshops':
        return 'Go to Internships';
      case 'internships':
        return 'Go to Projects';
      default:
        return 'Go to Top';
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="update-marquee">
          <marquee behavior="scroll" direction="left" scrollamount="10">
            Note : This page is being updated. Fresh contents coming soon !
          </marquee>
        </div>

        {/* PROJECTS SECTION */}
        <div id="web-projects">
          <h1 className="project-heading">
            <strong className="purple">Automation & Electronics Projects</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some of my recent industrial automation and electronics projects
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={delivery_robot}
                isBlog={false}
                isProject={true}
                title={<strong className="purple">Smart Solutions for Automated Restaurant Services with ML</strong>}
                description="Our goal was to automate the restaurant service process using a smart food delivery robot that identifies tables using RFID tags and delivers orders accurately. The system uses Arduino microcontrollers for control, RFID sensors for table identification, and a Gaussian regression-based ML model to improve delivery path accuracy and efficiency. This project demonstrates how automation, sensors, and machine learning can work together to solve real-world service problems. (Published in IEEE)"
                ghLink="#"
                demoLink="#"
                link="#"
                github="#"
                demo="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={v2v_ultrasonic}
                isBlog={false}
                isProject={true}
                title={<strong className="purple">Data Over Sound - V2V Communication</strong>}
                description="This project focused on developing a V2V (Vehicle-to-Vehicle) communication system using ultrasonic 'data over sound' technology. Instead of traditional wireless methods, we transmitted data between vehicles using ultrasonic sound waves, enabling real-time communication for collision avoidance and traffic safety. We designed transmitter and receiver modules using FSK modulation for efficient and reliable data transfer. (Published in IEEE)"
                ghLink="#"
                demoLink="#"
                link="#"
                github="#"
                demo="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={plc_sorting}
                isBlog={false}
                isProject={true}
                title={<strong className="purple">PLC-Based Automated Sorting System</strong>}
                description="[Placeholder Project] A simulated industrial sorting system using programmable logic controllers (PLCs) to sort items based on sensors and material properties. The logic controls pneumatic actuators and conveyor belts for seamless, continuous operation, ensuring high throughput and reliability."
                ghLink="#"
                demoLink="#"
                link="#"
                github="#"
                demo="#"
              />
            </Col>
          </Row>
        </div>

        {/* INTERNSHIPS SECTION */}
        <div id="internships">
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
            <strong className="purple">Internships & Professional Experience</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here is a highlight of my professional experience in the field
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                isBlog={false}
                slides={
                  <div style={{ margin: 0, padding: 0 }}>
                    <div className="each-slide-effect">
                      <div
                        style={{
                          backgroundImage: \`url(\${rockwell_intern})\`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          height: '300px',
                          margin: 0,
                          borderRadius: '5px'
                        }}
                      >
                      </div>
                    </div>
                    <h4 style={{ textAlign: 'center', color: 'white', marginTop: '10px', marginBottom: '10px' }}>
                      <strong className="purple">Engineer in Training - Rockwell Automation</strong>
                    </h4>
                    <div style={{ color: 'white' }}>
                      <span>
                        Currently joined <strong className="purple">Rockwell Automation</strong> as an Engineer in Training. I am gaining practical, hands-on experience with industrial automation control systems, PLCs, and smart manufacturing software solutions to solve complex engineering challenges.
                      </span>
                    </div>
                  </div>
                }
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={rockwell_intern}
                isBlog={false}
                title={<strong className="purple">Automation Intern [Placeholder]</strong>}
                description={(
                  <span>
                    Completed a <strong className="purple">Industrial Automation Virtual Internship</strong>, gaining hands-on experience with control systems.  
                    Designed and customized <strong className="purple">HMI screens</strong> to enhance user interface and improve monitoring.  
                    Built and automated workflows for seamless business process automation.
                  </span>
                )}
              />
            </Col>
          </Row>
        </div>

        {/* WORKSHOPS & HACKATHONS SECTION */}
        <div id="workshops">
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
            <strong className="purple">Workshops & Hackathons</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few Workshops & Hackathons I've attended
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={webture}
                isBlog={false}
                title={<strong className="purple">Industrial Automation Bootcamp [Placeholder]</strong>}
                description={(
                  <span>
                    Completed a comprehensive <strong className="purple">Industrial Automation</strong> bootcamp. The program covered a wide range of topics including <strong className="purple">PLC Programming, SCADA Systems, and IIoT</strong>. Throughout the course, I gained hands-on experience working on various automation concepts.
                  </span>
                )}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={decode}
                isBlog={false}
                title={<strong className="purple">Robotics Hackathon [Placeholder]</strong>}
                description={(
                  <span>Participated in a <strong className="purple">Robotics Hackathon</strong> and it was an incredible experience! The mentors and organizers provided invaluable guidance on motion control and sensor integration. Competing alongside talented engineers was <strong className="purple">truly inspiring</strong>.
                  </span>
                )}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                isBlog={false}
                slides={
                  <div style={{ margin: 0, padding: 0 }}>
                    <Slide 
                      autoplay={false}
                      duration={0}
                      transitionDuration={300}
                      canSwipe={true}
                      indicators={true}
                      arrows={true}
                    >
                      <div className="each-slide-effect">
                        <div
                          style={{
                            backgroundImage: \`url(\${sensors})\`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: '300px',
                            margin: 0,
                          }}
                        >
                        </div>
                      </div>
                      <div className="each-slide-effect">
                        <div
                          style={{
                            backgroundImage: \`url(\${sensors2})\`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: '300px',
                            margin: 0,
                          }}
                        >
                        </div>
                      </div>
                    </Slide>
                    <h4 style={{ textAlign: 'center', color: 'white', marginTop: '10px', marginBottom: '10px' }}>
                      <strong className="purple">Sensors and IoT For Smart Healthcare</strong>
                    </h4>
                    <div style={{ color: 'white' }}>
                      <span>
                        Participated in a Workshop conducted by <strong className="purple">IE(I)</strong> on the Topic Sensors & IoT for Smart Healthcare and gained hands-on experience! The workshop provided deep insights into the <strong className="purple">integration of sensors and IoT technologies</strong> in healthcare, highlighting their potential to revolutionize patient monitoring and healthcare delivery. Engaging with industry experts allowed me to explore practical applications and network with like-minded professionals.
                      </span>
                    </div>
                  </div>
                }
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                isBlog={false}
                slides={
                  <div style={{ margin: 0, padding: 0 }}>
                    <Slide 
                      autoplay={false}
                      duration={0}
                      transitionDuration={300}
                      canSwipe={true}
                      indicators={true}
                      arrows={true}
                    >
                      <div className="each-slide-effect">
                        <div
                          style={{
                            backgroundImage: \`url(\${ecobin})\`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: '300px',
                            margin: 0,
                          }}
                        >
                        </div>
                      </div>
                      <div className="each-slide-effect">
                        <div
                          style={{
                            backgroundImage: \`url(\${ecobin2})\`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: '300px',
                            margin: 0,
                          }}
                        >
                        </div>
                      </div>
                    </Slide>
                    <h4 style={{ textAlign: 'center', color: 'white', marginTop: '10px', marginBottom: '10px' }}>
                      <strong className="purple">ECOBIN HACKATHON</strong>
                    </h4>
                    <div style={{ color: 'white' }}>
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
                        <strong className="purple">&nbsp;'Engineers Day - 23'</strong> by the Department of Mechanical Engineering at SRM Institute of Science and Technology (SRMIST). It was an incredible experience collaborating with talented individuals to innovate and develop sustainable solutions for a cleaner and greener future. During the Smart ECOBIN Hackathon, I had the privilege of witnessing some 
                        <strong className="purple">&nbsp;truly innovative ideas</strong> from fellow teams.
                      </span>
                    </div>
                  </div>
                }
              />
            </Col>
          </Row>
        </div>

        {/* VOLUNTEERING SECTION */}
        <div id="volunteering">
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
            <strong className="purple">Volunteering</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some volunteering activities I've been involved in
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                isBlog={false}
                slides={
                  <div style={{ margin: 0, padding: 0 }}>
                    <Slide 
                      autoplay={false}
                      duration={0}
                      transitionDuration={300}
                      canSwipe={true}
                      indicators={true}
                      arrows={true}
                    >
                      <div className="each-slide-effect">
                        <div
                          style={{
                            backgroundImage: \`url(\${volunteer1})\`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: '300px',
                            margin: 0,
                          }}
                        >
                        </div>
                      </div>
                      <div className="each-slide-effect">
                        <div
                          style={{
                            backgroundImage: \`url(\${volunteer1_2})\`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: '300px',
                            margin: 0,
                          }}
                        >
                        </div>
                      </div>
                    </Slide>
                    <h4 style={{ textAlign: 'center', color: 'white', marginTop: '10px', marginBottom: '10px' }}>
                      <strong className="purple">Emerging Trends in IoT and It's Applications</strong>
                    </h4>
                    <div style={{ color: 'white' }}>
                      <span>
                        I was one of the <strong className="purple">Student Coordinators</strong> for engaging an informative workshop: 'Emerging Trends in IoT and its Applications', a <strong className="purple">6-day workshop</strong> organized by the ECE SRMIST KTR Department as part of SRMIST KTR's Professional Development Programme.
                      </span>
                    </div>
                  </div>
                }
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={volunteer2}
                isBlog={false}
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
                isBlog={false}
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
                isBlog={false}
                title={<strong className="purple">RAEEUCCI-2023</strong>}
                description={(
                  <span>I was one of the representative to attend <strong className="purple">The 2nd International conference</strong> on 'Recent Advances in Electrical, Electronics, Ubiquitous Communication, and Computational Intelligence' <strong className="purple">(RAEEUCCI-2023)</strong> Industry Conclave.
                  </span>
                )}
              />
            </Col>
          </Row>
        </div>
      </Container>

      {/* Scroll Up Navigation Button */}
      {showScrollTop && (
        <div className="scroll-top-container">
          <div 
            className="scroll-top-button"
            onClick={scrollToSection}
            title={getSectionLabel()}
          >
            <FaArrowUp />
            <span className="scroll-tooltip">{getSectionLabel()}</span>
          </div>
        </div>
      )}

      <style jsx>{\`
        .scroll-top-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .scroll-top-button {
          background: linear-gradient(45deg, #c770f0, #8b5a9e);
          color: white;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(199, 112, 240, 0.3);
          transition: all 0.3s ease;
          position: relative;
          font-size: 20px;
        }

        .scroll-top-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(199, 112, 240, 0.5);
          background: linear-gradient(45deg, #d084f7, #9c6ba9);
        }

        .scroll-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .scroll-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: rgba(0, 0, 0, 0.8);
        }

        .scroll-top-button:hover .scroll-tooltip {
          opacity: 1;
          visibility: visible;
          right: 75px;
        }

        @media (max-width: 768px) {
          .scroll-top-button {
            width: 50px;
            height: 50px;
            font-size: 16px;
          }

          .scroll-tooltip {
            font-size: 12px;
            padding: 6px 10px;
            right: 60px;
          }

          .scroll-top-button:hover .scroll-tooltip {
            right: 65px;
          }
        }
      \`}</style>
    </Container>
  );
}

export default Projects;

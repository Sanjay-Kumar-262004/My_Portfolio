import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import 'react-slideshow-image/dist/styles.css';
import { FaArrowUp } from 'react-icons/fa';

import delivery_robot from "../../Assets/Projects/delivery_robot_1777094182633.png";
import v2v_ultrasonic from "../../Assets/Projects/v2v_ultrasonic_1777094202935.png";
import rockwell_intern from "../../Assets/Projects/rockwell_logo_new.png";
import Awards from "../About/Awards";

function Projects() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('internships');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollTop(scrollTop > 300);

      const internshipsSection = document.getElementById('internships');
      const webProjectsSection = document.getElementById('web-projects');
      const awardsSection = document.getElementById('awards');

      if (internshipsSection && webProjectsSection && awardsSection) {
        const awardsTop = awardsSection.offsetTop;
        const webProjectsTop = webProjectsSection.offsetTop;

        if (scrollTop >= awardsTop - 100) {
          setCurrentSection('awards');
        } else if (scrollTop >= webProjectsTop - 100) {
          setCurrentSection('web-projects');
        } else {
          setCurrentSection('internships');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    let targetSection;
    switch (currentSection) {
      case 'awards':
        targetSection = 'web-projects';
        break;
      case 'web-projects':
        targetSection = 'internships';
        break;
      default:
        targetSection = 'internships';
    }

    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSectionLabel = () => {
    switch (currentSection) {
      case 'awards':
        return 'Go to Projects';
      case 'web-projects':
        return 'Go to Experience';
      default:
        return 'Go to Top';
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        {/* WORK EXPERIENCE SECTION */}
        <div id="internships">
          <h1 className="project-heading">
            <strong className="purple">Professional Experience</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here is a highlight of my professional experience
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={5} className="project-card">
              <ProjectCard
                imgPath={rockwell_intern}
                isBlog={false}
                title={<strong className="purple">Engineer in Training - Rockwell Automation</strong>}
                description={(
                  <span>
                    Currently joined <strong className="purple">Rockwell Automation</strong> as an Engineer in Training. I am gaining practical, hands-on experience with industrial automation control systems, PLCs, and smart manufacturing software solutions to solve complex engineering challenges.
                  </span>
                )}
              />
            </Col>
          </Row>
        </div>

        {/* PROJECTS SECTION */}
        <div id="web-projects">
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
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
                paperLink="https://ieeexplore.ieee.org/document/10810935"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={v2v_ultrasonic}
                isBlog={false}
                isProject={true}
                title={<strong className="purple">Data Over Sound - V2V Communication</strong>}
                description="This project focused on developing a V2V (Vehicle-to-Vehicle) communication system using ultrasonic 'data over sound' technology. Instead of traditional wireless methods, we transmitted data between vehicles using ultrasonic sound waves, enabling real-time communication for collision avoidance and traffic safety. We designed transmitter and receiver modules using FSK modulation for efficient and reliable data transfer. (Published in IEEE)"
                paperLink="https://ieeexplore.ieee.org/document/11048346"
              />
            </Col>
          </Row>
        </div>

        {/* AWARDS SECTION */}
        <div id="awards">
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
            Research <strong className="purple">Awards</strong>
          </h1>
          <Awards />
        </div>
      </Container>

      {/* Scroll Navigation Button */}
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

      <style jsx>{`
        .scroll-top-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .scroll-top-button {
          background: linear-gradient(45deg, #008DDA, #005f99);
          color: white;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 141, 218, 0.3);
          transition: all 0.3s ease;
          position: relative;
          font-size: 20px;
        }

        .scroll-top-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(0, 141, 218, 0.5);
          background: linear-gradient(45deg, #00a2ff, #0077c2);
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
      `}</style>
    </Container>
  );
}

export default Projects;

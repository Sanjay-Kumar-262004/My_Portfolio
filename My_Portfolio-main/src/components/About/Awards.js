import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import award1_photo from "../../Assets/Awards/award1_photo.jpg";
import award1_cert from "../../Assets/Awards/award1_cert.png";
import award2_photo from "../../Assets/Awards/award2_photo.jpg";
import award2_cert from "../../Assets/Awards/award2_cert.jpg";

function Awards() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={5} className="project-card">
        <ProjectCard
          isBlog={false}
          slides={
            <div style={{ margin: 0, padding: 0 }}>
              <Slide
                autoplay={true}
                duration={3000}
                transitionDuration={300}
                canSwipe={true}
                indicators={true}
                arrows={true}
              >
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${award1_photo})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "300px",
                      margin: 0,
                    }}
                  ></div>
                </div>
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${award1_cert})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "300px",
                      margin: 0,
                    }}
                  ></div>
                </div>
              </Slide>
              <h4
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <strong className="purple">
                  APJ Abdul Kalam Research Award 2026
                </strong>
              </h4>
              <div style={{ color: "white", padding: "10px" }}>
                <span>
                  <strong>THE CHANCELLOR'S AWARD FOR EXCELLENCE IN UG RESEARCH 2026</strong> - Received the Best UG Research Award on National Science Day 2026 from Dr. Akhilesh Kumar Mishra, Scientist-E, Ministry of Earth Sciences, Government of India, New Delhi.
                </span>
              </div>
            </div>
          }
        />
      </Col>

      <Col md={5} className="project-card">
        <ProjectCard
          isBlog={false}
          slides={
            <div style={{ margin: 0, padding: 0 }}>
              <Slide
                autoplay={true}
                duration={3000}
                transitionDuration={300}
                canSwipe={true}
                indicators={true}
                arrows={true}
              >
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${award2_photo})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "300px",
                      margin: 0,
                    }}
                  ></div>
                </div>
                <div className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${award2_cert})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "300px",
                      margin: 0,
                    }}
                  ></div>
                </div>
              </Slide>
              <h4
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <strong className="purple">
                  Chancellor's Award for Excellence 2025
                </strong>
              </h4>
              <div style={{ color: "white", padding: "10px" }}>
                <span>
                  <strong>CHANCELLOR'S AWARD FOR EXCELLENCE IN UG RESEARCH 2025</strong> - Received the Best UG Research Award on National Science Day 2025 from Dr. Tapas. K. Kundu, Director, CSIR, Lucknow.
                </span>
              </div>
            </div>
          }
        />
      </Col>
    </Row>
  );
}

export default Awards;

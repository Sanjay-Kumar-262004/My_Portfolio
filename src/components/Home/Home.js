import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import homeLogo2 from "../../Assets/home-main1.svg";

import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
// Project Update Check

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SANJAY KUMAR S</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <h1>Welcome to my Creative Corner !</h1>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="floating-container">
                <img
                  src={homeLogo2}
                  alt="home pic"
                  className="img-fluid floating-svg"
                  style={{ maxHeight: "350px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <style jsx>{`
        .floating-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .floating-svg {
          animation: float 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .floating-svg:hover {
          transform: scale(1.05);
          animation-play-state: paused;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-svg {
            max-height: 280px !important;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        }

        @media (max-width: 576px) {
          .floating-svg {
            max-height: 220px !important;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        }

        /* Footer fix for small screens */
        .home-section {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        @media (max-width: 768px) {
          .home-section {
            padding-bottom: 80px;
          }
        }

        @media (max-width: 576px) {
          .home-section {
            padding-bottom: 100px;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;

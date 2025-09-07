import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import homeLogo2 from "../../Assets/home-main1.svg";

import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section className="home-section-wrapper">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center h-100">
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
        .home-section-wrapper {
          height: 100vh;
          overflow: hidden;
        }

        .home-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          background: transparent !important;
          z-index: 1;
        }

        /* Ensure Particle component is behind content */
        .home-section > :global(.particles-js) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .home-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .floating-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .floating-svg {
          animation: float 3s ease-in-out infinite;
          transition: all 0.3s ease;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
        }

        .floating-svg:hover {
          transform: scale(1.05);
          animation-play-state: paused;
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15));
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Wave animation for emoji */
        .wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          40% {
            transform: rotate(14deg);
          }
          50% {
            transform: rotate(-4deg);
          }
          60% {
            transform: rotate(10deg);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .home-section-wrapper,
          .home-section,
          .home-content {
            height: 100vh;
          }

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

          .home-header h1 {
            font-size: 1.8rem;
          }

          .home-header .heading-name {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 576px) {
          .home-section-wrapper,
          .home-section,
          .home-content {
            height: 100vh;
          }

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

          .home-header h1 {
            font-size: 1.5rem;
          }

          .home-header .heading-name {
            font-size: 1.3rem;
          }

          .home-header div {
            padding: 30px 0 !important;
          }
        }

        /* Override any Bootstrap margins/padding that might cause overflow */
        :global(body) {
          overflow-x: hidden;
        }

        :global(.container-fluid) {
          padding: 0 !important;
        }
      `}</style>
    </section>
  );
}

export default Home;
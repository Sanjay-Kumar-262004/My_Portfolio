import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo1 from "../../Assets/home-main1.svg";
import homeLogo2 from "../../Assets/bot.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SANJAY KUMAR S</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <h1>Welcome to my Creative Corner!</h1>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={homeLogo2}
                alt="home pic"
                className="img-fluid floating-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <style jsx>{`
        /* Home section styling */
        .home-section {
          min-height: 100vh;
          position: relative;
          background: transparent;
        }

        /* Content above particles */
        .home-content {
          position: relative;
          z-index: 2;
          background: transparent;
          padding-top: 100px;
        }

        /* Floating image animation */
        .floating-img {
          animation: float 3s ease-in-out infinite;
          transition: all 0.3s ease;
          border-radius: 12px;
          max-height: 350px;
        }

        .floating-img:hover {
          transform: scale(1.05);
          animation-play-state: paused;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Wave animation */
        .wave {
          animation: wave-animation 2.1s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }

        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-img {
            max-height: 280px !important;
          }
        }

        @media (max-width: 576px) {
          .floating-img {
            max-height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo1 from "../../Assets/home-main1.svg";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
      >
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
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

            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={homeLogo1}
                alt="home pic"
                className="img-fluid floating-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import {
  SiVisualstudiocode,
  // SiPostman,
  // SiSlack,
  // SiVercel,
  // SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VsCode</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
        <h5>GitHub</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbBrandVercel />
        <h5>Vercel</h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;

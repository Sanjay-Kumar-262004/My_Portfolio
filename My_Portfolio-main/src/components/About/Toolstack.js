import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiRockwellautomation, SiSiemens, SiInductiveautomation } from "react-icons/si";
import { FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiRockwellautomation />
        <h5>Studio 5000</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRockwellautomation />
        <h5>FactoryTalk View</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRockwellautomation />
        <h5>RSLogix 500</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRockwellautomation />
        <h5>RSLinx Classic</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlinePrecisionManufacturing />
        <h5>Connected Components Workbench</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ opacity: 0.5 }}>
        <FaCogs />
        <h5>Future Tool</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;


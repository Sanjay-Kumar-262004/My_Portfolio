import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMicrochip, FaNetworkWired, FaTools, FaBuilding, FaIndustry } from "react-icons/fa";
import { MdDesktopWindows, MdSensors } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
        <h5>PLC Programming</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdDesktopWindows />
        <h5>SCADA & HMI Systems</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaIndustry />
        <h5>Studio 5000 Logix Designer</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdSensors />
        <h5>Field Instrumentation & Sensors</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBuilding />
        <h5>Smart Building Automation (BMS)</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <h5>Industrial Networks (EtherNet/IP)</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsLightningCharge />
        <h5>Electrical Systems & HVAC Controls</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ opacity: 0.5 }}>
        <FaTools />
        <h5>Future Addition</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ opacity: 0.5 }}>
        <FaTools />
        <h5>Future Addition</h5>
      </Col>
    </Row>
  );
}

export default Techstack;

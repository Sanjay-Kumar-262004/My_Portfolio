import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMicrochip, FaNetworkWired, FaBuilding, FaIndustry } from "react-icons/fa";
import { MdDesktopWindows, MdSensors } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaMicrochip />
          <h5>PLC Programming</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <MdDesktopWindows />
          <h5>SCADA & HMI Systems</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaIndustry />
          <h5>Studio 5000 Logix Designer</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <MdSensors />
          <h5>Field Instrumentation & Sensors</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaBuilding />
          <h5>Smart Building Automation (BMS)</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaNetworkWired />
          <h5>Industrial Networks (EtherNet/IP)</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <BsLightningCharge />
          <h5>Electrical Systems & HVAC Controls</h5>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaIndustry } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaIndustry />
          <h5>Studio 5000</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaIndustry />
          <h5>FactoryTalk View</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaIndustry />
          <h5>RSLogix 500</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <FaIndustry />
          <h5>RSLinx Classic</h5>
        </div>
      </Col>
      <Col xs={6} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <MdOutlinePrecisionManufacturing />
          <h5>Connected Components Workbench</h5>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;

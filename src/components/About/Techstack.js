import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  // DiPython,
  DiGit,
} from "react-icons/di";
import {
  // SiRedis,
  // SiFirebase,
  // SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <TiHtml5 />
      <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      <h5>BootStrap</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node</h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
       <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git</h5>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb />
        <h5>MongoDb</h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;

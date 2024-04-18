import React from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiPython,
  SiGit,
  SiPostgresql,
  SiFastapi,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiJsonwebtokens,
} from "react-icons/si"

function Techstack() {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJsonwebtokens />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
        </Col>
      </Row>
    </IconContext.Provider>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiPhp,
} from "react-icons/di";
import { SiMysql, SiMariadb, SiC } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
    </Row>
  );
}

export default Techstack;

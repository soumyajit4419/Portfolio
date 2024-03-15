import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiRuby,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiRubyonrails,
  SiPostgresql,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
        <p className="icon-text"> Ruby </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="icon-text"> React.js </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="icon-text"> Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="icon-text"> PostgreSQL </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
        <p className="icon-text"> Rails API </p>
      </Col>
    </Row>
  );
}

export default Techstack;

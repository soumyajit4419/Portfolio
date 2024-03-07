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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiCodepen,
  DiDocker,
  DiMysql,
  DiStackoverflow,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiAudacity,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodepen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiStackoverflow />
      </Col>
    </Row>
  );
}

export default Toolstack;

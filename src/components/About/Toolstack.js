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
  SiCanva,
  SiCodecademy,

  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="Visual Studio Code" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col title="Audacity" xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col title="CodePen" xs={4} md={2} className="tech-icons">
        <DiCodepen />
      </Col>
      <Col title="Docker" xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col title="MySQL" xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col title="Stack Overflow" xs={4} md={2} className="tech-icons">
        <DiStackoverflow />
      </Col>
      <Col title="Canva" xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col title="Codecademy" xs={4} md={2} className="tech-icons">
        <SiCodecademy />
      </Col>
    </Row>
  );
}

export default Toolstack;

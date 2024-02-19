import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <div class="text">MacOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div class="text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div class="text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <div class="text">Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div class="text">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

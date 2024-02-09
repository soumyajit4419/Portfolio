import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiNotion,
  SiAndroidstudio,
  SiFastify,
  SiAndroid,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ fontSize: 15 }}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: 15 }}>Vs code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: 15 }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <p style={{ fontSize: 15 }}>Notion</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: 15 }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
        <p style={{ fontSize: 15 }}>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: 15 }}>Github</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

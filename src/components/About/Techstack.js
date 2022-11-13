import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgMusic } from "react-icons/cg";
import {
  DiLinux,
  DiAtlassian,
  DiApple,
  DiDocker,
  DiWindows,
  DiGit,
} from "react-icons/di";
import {
  SiMicrosoftazure,
  SiAdobecreativecloud,
  SiKubernetes,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgMusic />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAtlassian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
    </Row>
  );
}

export default Techstack;

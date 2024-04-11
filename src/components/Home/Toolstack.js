import React from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  SiVisualstudiocode,
  SiInsomnia,
  SiSlack,
  SiDocker,
  SiWindows11,
  SiGooglechrome,
} from "react-icons/si";

function Toolstack() {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows11 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglechrome />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiInsomnia />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
      </Row>
    </IconContext.Provider>
  );
}

export default Toolstack;

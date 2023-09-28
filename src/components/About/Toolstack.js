import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiVisualstudio
} from "react-icons/si";
import {
  AiFillGithub,
  AiOutlineStock
} from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <AiFillGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiVisualstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineStock/>
      </Col>
    </Row>
  );
}

export default Toolstack;

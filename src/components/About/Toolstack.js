import React from "react";

import { Col, Row } from "react-bootstrap";

import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";

function Toolstack() {
  // Array of tool icons
  const toolIcons = [
    { icon: <SiMacos /> },
    { icon: <SiVisualstudiocode /> },
    { icon: <SiPostman /> },
    { icon: <SiSlack /> },
    { icon: <SiVercel /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolIcons.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

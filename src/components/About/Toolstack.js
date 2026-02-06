import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import { toolStack } from "../../data/portfolioData";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.isReactIcon ? (
            <tech.icon size={20} />
          ) : (
            <img src={tech.icon} height={20} alt={tech.name} />
          )}
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Pgadmin from "../../Assets/TechIcons/Pgadmin.svg";
import Jupyter from "../../Assets/TechIcons/Jupyter.svg";
import Anaconda from "../../Assets/TechIcons/Anaconda.svg";
import GitHub from "../../Assets/TechIcons/GitHub.svg";
import Office from "../../Assets/TechIcons/Office.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Pgadmin} alt="Pgadmin" className="tech-icon-images" />
        <div className="tech-icons-text">Pgadmin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Jupyter} alt="Jupyter" className="tech-icon-images" />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Anaconda} alt="Anaconda" className="tech-icon-images" />
        <div className="tech-icons-text">Anaconda</div>
      </Col>
           <Col xs={4} md={2} className="tech-icons ">
        <img src={GitHub} alt="GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Office} alt="Office" className="tech-icon-images" />
        <div className="tech-icons-text">Microsoft Office</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

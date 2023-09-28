import React from "react";
import { Col, Row } from "react-bootstrap";

import Python from "../../Assets/icons8-python-480.png";
import Java from "../../Assets/java.png";
import CPP from "../../Assets/icons8-c-480.png";
import HTML from "../../Assets/html.png";
import CSS from "../../Assets/icons8-css-logo-480.png";
import REACT from "../../Assets/react.png";
import Node from "../../Assets/node.png";
import JS from "../../Assets/icons8-javascript-240.png";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Python} alt="Python" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Java} alt="Java" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={CPP} alt="CPP" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={HTML} alt="HTML" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={CSS} alt="CSS" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={REACT} alt="React" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Node} alt="Node" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={JS} alt="JavaScript" className="img-fluid" />
      </Col>
      
    </Row>
  );
}

export default Techstack;

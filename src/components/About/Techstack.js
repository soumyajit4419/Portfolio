import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiRuby,
  DiMysql,
  DiSqllite,
  DiGit,
  DiWordpress,
  DiHtml5,
  DiCss3Full,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        Ruby
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Rail
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        React
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Javascript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        HTML
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        CSS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SASS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        GIT
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        NPM
      </Col>
    </Row>
  );
}

export default Techstack;

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
      <Col xs={4} md={2} className="home-tech-icons">
        Ruby
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        Rail
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        React
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        JS
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        HTML
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        CSS
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        SASS
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        GIT
      </Col>
      <Col xs={4} md={2} className="home-tech-icons">
        NPM
      </Col>
    </Row>
  );
}

export default Techstack;

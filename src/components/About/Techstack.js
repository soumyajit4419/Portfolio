import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiPhp,
  DiSymfony,
  DiMysql,
} from "react-icons/di";
import {
  SiPostgresql,
  SiKotlin,
  SiTypescript,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Symfony">
        <DiSymfony />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NodeJS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kotlin">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons" title="GIT">
        <DiGit />
      </Col>
     
    
      
      
    </Row>
  );
}

export default Techstack;

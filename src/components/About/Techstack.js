import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;

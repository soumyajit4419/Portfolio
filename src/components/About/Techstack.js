import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div class="text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div class="text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <div class="text">GoLANG</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div class="text">Node.JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div class="text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <div class="text">Solidity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div class="text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div class="text">NextJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div class="text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div class="text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <div class="text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div class="text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div class="text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div class="text">Java</div>
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiDatabase,
  DiMongodb,
  DiGit,
  DiJava,
  DiDocker,
  DiJenkins,
  DiOpenshift,
  DiRedhat,
  DiPython,
  DiMysql,
} from "react-icons/di";
import {
  SiApache,
  SiGithub,
  SiAnsible,
  SiOpenstack,
  SiKubernetes,
  SiTerraform,
  SiPodman,
  SiGitlab,
  SiGithubactions,
  SiAmazonaws,
} from "react-icons/si";
import { TbBrandGolang ,

} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenstack/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOpenshift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRedhat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPodman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
  
    </Row>
  );
}

export default Techstack;

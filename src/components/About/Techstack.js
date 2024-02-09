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
  DiGithub,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTypescript,
  SiFastify,
  SiPython,
  SiVuedotjs,
  SiCplusplus,
  SiC,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import {
  TbBrandGolang,
  TbBrandReactNative,
  TbHexagonLetterC,
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: 15 }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: 15 }}>NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: 15 }}>React/React-native</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: 15 }}>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastify />
        <p style={{ fontSize: 15 }}>Fastify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: 15 }}>NextJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p style={{ fontSize: 15 }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
        <p style={{ fontSize: 15 }}>VueJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
        <p style={{ fontSize: 15 }}>Prisma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p style={{ fontSize: 15 }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <p style={{ fontSize: 15 }}>C programming</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{ fontSize: 15 }}>Docker</p>
      </Col>
    </Row>
  );
}

export default Techstack;

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
  // Array of technology icons
  const techIcons = [
    { icon: <CgCPlusPlus /> },
    { icon: <DiJavascript1 /> },
    { icon: <TbBrandGolang /> },
    { icon: <DiNodejs /> },
    { icon: <DiReact /> },
    { icon: <SiSolidity /> },
    { icon: <DiMongodb /> },
    { icon: <SiNextdotjs /> },
    { icon: <DiGit /> },
    { icon: <SiFirebase /> },
    { icon: <SiRedis /> },
    { icon: <SiPostgresql /> },
    { icon: <DiPython /> },
    { icon: <DiJava /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

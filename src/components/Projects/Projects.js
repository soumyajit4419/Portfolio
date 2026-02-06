import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


import { projectStack } from "../../data/portfolioData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectStack.map((project, index) => {
            return <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.icon}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.repoLink}
                demoLink={project.liveLink}
              />
            </Col>
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

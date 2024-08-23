import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { data } from "../../Constants";

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
          {data.projects.length > 0 ? data.projects.map((project, index) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project.imagePath}
                  isBlog={project.blog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            )
          }) : 
          <Container style={{ minHeight: "auto"}}>
            <h1 className="project-heading">
              Yet to be Added
            </h1>
            </Container>}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

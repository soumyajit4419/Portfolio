import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import DataAPI from "../../Assets/AnalyticsCode.png";
import ChoreManager from "../../Assets/choremanager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a list of my projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DataAPI}
              isBlog={false}
              title="Machine Learning & Youtube Data Analytics API"
              description="In Progress"
              ghLink="#"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChoreManager}
              isBlog={false}
              title="Chore Management System"
              description="A chore management proram designed to simplify household task management and allocation."
              ghLink="https://github.com/Okuhama/Chore-Manager"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

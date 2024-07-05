import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Quotes from "../../Assets/Projects/Quotes.png";
import film from "../../Assets/Projects/Film.png";
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
      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quotes}
              isBlog={false}
              title="Quotes"
              description="website random quotes&game"
              ghLink="#"
              demoLink="https://zdnchxstore.000webhostapp.com"
            />
          </Col>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Film"
              description="Zidan Film"
              ghLink="#"
              demoLink="https://zdnchxstore.000webhostapp.com/ZDNCH"
            />
          </Col>  
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

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
              imgPath={chatify}
              isBlog={false}
              title="Digital Environments"
              description=" This is all about exploring digital environments. What does that mean? Well I'm not sure but has something to do with having an interactive online hub. It being a hub isn't important, it being interactive is what this is all about. The interactiveness should come from a couple of 3D renders and other things."
              ghLink="https://github.com/Digital-Environments"
              demoLink="https://digienv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="So Many Numbers"
              description="A random phone number phone number generated. Suited for when you would like to generate random phone numbers."
              ghLink="https://github.com/MembaMcetywa/so-many-numbers"
              demoLink="https://somanynumbers.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Point of Interest"
              description="Do you have a point of interest? Well hop on and let us help you find it. A calatog of interesting places"
              ghLink="https://github.com/MembaMcetywa/point-of-interest"
              demoLink="https://pointofinterst.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

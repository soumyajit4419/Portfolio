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
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Legend of Jagger"
              description="Made a fully functional 2D RPG game with a linear storyline, location based fight sequences, open world and scoring
              functionality. 
              I worked on Map design, Animations, Movements, Randomized Event triggering and Integrated the fight sequences.
              Also came up with a O(1) algorithm for collision avoidance, to replace the conventional O(n2) algorithm."
              ghLink="https://github.com/vatsal-dhama/legend_of_jagger"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FoodFast"
              description="Made a Food Delivery app for The college mess."
              ghLink="https://github.com/vatsal-dhama/foodfast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Block-chain based healthcare app"
              description="Built an ethereum smart contract based web application for flash consultation and appointment booking functionality for a 36hr
              hackathon.
              I worked on the patient side back-end and designed the front-end of the website"
              ghLink="https://github.com/soumyajit4419/Editor.io"           
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

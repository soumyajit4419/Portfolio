import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
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
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A turn based Tic-Tac-Toe game created in Javascript using React and CSS."
              ghLink="https://github.com/yoshihiroyamada23/Tic-Tac-Toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Radiation RUN!"
              description="Radiation Run is a Text Based Game created in Ruby where each direction is either you suffer from radiation or you get an immune pill. SO BE CAREFUL WHICH ARROW KEYS YOU PRESS."
              ghLink="https://github.com/yoshihiroyamada23/Text-Based-Game"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

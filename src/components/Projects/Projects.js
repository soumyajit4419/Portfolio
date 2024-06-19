import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import generichat from "../../Assets/Projects/generichat.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import maze from "../../Assets/Projects/maze.png";
import carcar from "../../Assets/Projects/carcar.png";
import css_perspective_playground from "../../Assets/Projects/css_perspective_playground.png";
import vue_music from "../../Assets/Projects/vue_music.png";

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
    >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={vue_music}
              title="Online Music Player"
              description="An online service for uploading and playing music files.  This was a project to learn and implement Vue and official/popular Vue plugins."
              ghLink="https://github.com/funksy/vue-music-app"
              demoLink="https://music.johnlukich.me"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={css_perspective_playground}
              title="CSS Perspective Playground"
              description="A very basic use of Vue's tools to dynamically modify CSS properties"
              ghLink="https://github.com/funksy/css_perspective_playground"
              demoLink="https://funksy.github.io/css_perspective_playground/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={portfolio}
              title="Personal Portfolio"
              description="A personal portfolio website (which you are probably viewing now!), forked from a publicly shared template, and modified to fit my own needs and aesthetic."
              ghLink="https://github.com/funksy/portfolio"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={generichat}
              title="generiChat"
              description="An online chatroom using websockets which requires user authentication to participate in."
              ghLink="https://github.com/funksy/generiChat"
              demoLink="https://module-3-chat-the-furious-five-cd981305b7e8dd2f1268cf5844abef49.gitlab.io/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={carcar}
              title="CarCar"
              description="The project is CarCar, an application for managing aspects of an automobile dealership — specifically its inventory, sales and service center."
              ghLink="https://github.com/funksy/CarCar"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={maze}
              title="Maze Generator/Solver"
              description="An application for visualizing the generation and solving of a maze.  It generates using Random Prim's Algorithm, and can be configured to solve using a breadth first search or a depth first search."
              ghLink="https://github.com/funksy/Mazes"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

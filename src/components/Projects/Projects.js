import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kanji from "../../Assets/Projects/kanji.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import CatTinder from "../../Assets/Projects/CatTinder.png"


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
              imgPath={kanji}
              isBlog={false}
              title="Kanji"
              description="Kanji is a capstone project where it showcase full-stack developer using React and Ruby on Rails. It is a website for rare collectibles which showcases full CRUD functionalities."
              ghLink="https://github.com/orgs/RarityKanji/repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CatTinder}
              isBlog={false}
              title="Cat Tinder"
              description="Cat Tinder is a full-stack application which showcases both front-end and back-end using React and Ruby on Rails. It is an application which showcases full CRUD functionalities and user friendly"
              ghLink="https://github.com/yoshihiroyamada23/cat-tinder-front-end"
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

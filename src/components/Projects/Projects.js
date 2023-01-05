import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import WSDM from "../../Assets/Projects/WSDM.png";
import bank from "../../Assets/Projects/bank.jfif";
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
          Here are several projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={WSDM}
              isPaper={true}
              title="(WSDM2022) A Sequence-to-Sequence Model for Large-scale Chinese Abbreviation Database Construction"
              description="Proposed to formalize the Chinese abbreviation prediction task as a sequence generation problem. 
              Designed a novel sequence-to-sequence model. Propose a multi-level 
              pre-trained model that incorporates character, word, and concept-level embeddings to boost the performance of our deep model. Built a new dataset containing 81,351 pairs of full forms and abbreviations for 
              Chinese abbreviation prediction automatically. 
              Released API for demo, feel free to try!"
              paperLink="https://dl.acm.org/doi/abs/10.1145/3488560.3498430"
              demoLink="http://kw.fudan.edu.cn/ddemos/abbr/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bank}
              isPaper={false}
              title="Banker Dream"
              description="Bank system for bankers and customers with OOP design pattern. Front-end with Swing"
              ghLink="https://github.com/Djokovic0311/Final-Project-ATM"
              demoLink=""
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

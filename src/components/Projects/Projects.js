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
              title="End to end Sentiment"
              description="A real-time data streaming and sentiment analysis pipeline using Apache Spark on Databricks, structured into bronze, silver, and gold stages. It features MLflow for model tracking and demonstrates handling large-scale data streams with advanced data transformation techniques. "
              ghLink="https://github.com/selengetu/End-to-end-Sentiment-Data-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Motion Lab - Data integration"
              description="Developed a robust database and analytics platform using Python and SQL to manage and analyze complex biomechanical data, including EEG, EMG, and kinematic measurements."
              ghLink="https://github.com/selengetu/Motion_Lab_Data_Integration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="UR FOUND"
              description="Centralized database to ensure data integrity, scalability, and security. Advanced search and retrieval capabilities for efficient item tracking.
              - Automation of notifications and comprehensive reporting and analytics."
              ghLink="https://github.com/selengetu/ur-found" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

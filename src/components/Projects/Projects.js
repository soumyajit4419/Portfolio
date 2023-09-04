import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Currently <strong className="purple">Working on </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Collision detection System"
              description="A Machine Learning project to detect accidents in highways and based on the 
              level of threat take appropriate actions. Implemented using YOLO COCO model and trained 
              on custom dataset which can also notify proper authorities"
              ghLink="https://github.com/Shreysid/Collision_detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Garbage Collection System"
              description="A garbage collection system built using MERN stack targeted 
              to decrease garbage littered in neighbourhoods by lodging and viewing complaints. 
              Users can also delete complaints upon the completion of work"
              ghLink="https://github.com/Shreysid/GarbageCollectionSystem.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Automate Clicking"
              description="A python automation script built to automate the boring tasks built using the library pynput.
              The script also enables users to do simple tasks such as copying text from one file to another"
              ghLink="https://github.com/Shreysid/Automate-clicking.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Sign To Text"
              description="A Machine learning project built using CNN integrated with 
              AR core of mobile application to translate ASL(American Sign Language) 
              to english text. Targeted to ease the communication between a normal 
              person and a mute person. Implemented using Unity to build a 
              cross-platform application"
              ghLink="https://github.com/Shreysid/signTotext.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Matrix partition method"
              description="A python script to solve a system of numerical 
              equations numerically by the method of Matrix partition"
              ghLink="https://github.com/Shreysid/Matrix_partition_method.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Social media app"
              description="A social media app made using react native and Tailwind css.
              Users can view others post, like and comment on posts"
              ghLink="https://github.com/Shreysid/Social_media.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/Chat Room (1).png";
import editor from "../../Assets/Projects/Chat Room (3).png";
import chatify from "../../Assets/Projects/Chat Room (2).png";
import suicide from "../../Assets/Projects/Chat Room (4).png";

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
              title="RoomChat"
              description="The JavaFX Chat Application is a desktop application that facilitates real-time communication between multiple users over a local server. Built using JavaFX for the user interface and Java Sockets for network communication, this application serves as a robust platform for chatting and managing user connections in a local network environment."
              ghLink="https://github.com/alielesawy/chat-group"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ATM"
              description="JAVA-IMPLEMENTED SIMULATION FOR ATM MACHINE USING MYSQL"
              ghLink="https://github.com/alielesawy/ATM-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Paint App"
              description="JAVA AND JAVAFX FOR PAINT APP."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="PC Age"
              description="APPLICATION TO DETERMINE THE AGE OF A pc AND RETRIEVE THE MANUFACTURING DATE FROM THE BIOS."
              ghLink="https://github.com/alielesawy/Your-PC-Age"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

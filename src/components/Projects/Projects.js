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
              title="Mission Oxygen Team"
              description="MOT is an biomedical equipment management system used for mananging the biomedical equipment and other resources of hospital. It connects the biomedical engineer, vendor and hospital and own by the Health Ministry office of Nepal Goverment."
              ghLink="https://github.com/ramtamang-2058/"
              demoLink="http://missionoxygenteam.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VSOLUTION"
              description="It is an Questing and answering platform for school and college. It will manage the all information for educational organization. Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Ramtamang-2058/QA_vsolution_java"
              demoLink="https://github.com/Ramtamang-2058/QA_vsolution_java/blob/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ecommerce"
              description="This ecommerce side provides platform for the vendor and customer where vendor can sell thier product and customer can select and buy required items from the system. It also provide the online payment plaform."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Personal Blog | Portfolio"
              description="Blog web Application where people can add thier blog articles and people. After registering account people can also post their article on site. It's like public site and personal site where persons work as admin and others are user. It provide the user profiling, notification and free writting platform where anyone can post thier articles and content."
              ghLink="https://github.com/Ramtamang-2058/Portfolio"
              demoLink="http://futurenews.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Digital SHE"
              description="Digital SHE is government program. Digital SHE system provides the API and program Shedules, events and others organizational and goverment program where girls can join program. DigitalSHE connect the govermental organization and girls who want to involve in technology like robotics and digitalization. It is project govern by the UNDP (United Nation Development Program."
              ghLink="https://github.com/ramtamang-2058/"
              demoLink="https://digitalshe.ran.org.np/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/ramtamang-2058"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

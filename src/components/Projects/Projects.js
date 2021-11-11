import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
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
          My Recent <strong className="site-color">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Connect US"
              description=""
              link="https://github.com/Cmosley/where-should-we-live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Script Studio"
              description="ScriptStud.io is a platform which is easy for a casual user to interface with and allows users to upload examples of well-written code with contextual information about use. It will also be presented in an accessible manner which is easy for a user to read with minimal distraction or superfluous on-page content. This will allow engineers to save, share, and find code for their projects efficiently."
              link="https://github.com/Cmosley/ScriptStud.io-public"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Diversify"
              description="This application focuses on improving diversity in the workplace. Employees can research companies to gage how diverse a certain company is or isn't and check to see if that company is working on improving their Diversity & Inclusion practices. Companies can submit information on their D&I initiatives, take the Diversify D&I Quiz to see what areas they need to improve on, and find resources on how to improve their D&I"
              link="https://github.com/Cmosley/SS-BIPOC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Auto-GM"
              description="Business KPI dashboard which plots past sales and predicts future sales using Linear Regression algorithms"
              link="https://auto-gm.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

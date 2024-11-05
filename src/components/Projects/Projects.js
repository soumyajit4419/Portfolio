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
  // Define an array of project data
  const projectData = [
    {
      imgPath: chatify,
      title: "Chatify",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Features include realtime messaging, image sharing, and reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/",
    },
    {
      imgPath: bitsOfCode,
      title: "Bits-0f-C0de",
      description:
        "My personal blog page built with Next.js and Tailwind CSS. Renders content from markdown files using Next.js, supports dark mode, and is easy to write blogs using markdown.",
      ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/",
    },
    {
      imgPath: editor,
      title: "Editor.io",
      description:
        "Online code and markdown editor built with React.js. Supports HTML, CSS, JS with instant preview, and markdown with GFM. Includes toolbar and instant preview, with auto-save via local storage.",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
    {
      imgPath: leaf,
      title: "Plant AI",
      description:
        "Used Kaggle’s plant disease dataset to train an image classifier model in PyTorch using CNN and Transfer Learning. The model detected diseased and healthy leaves with 98% accuracy.",
      ghLink: "https://github.com/soumyajit4419/Plant_AI",
      demoLink: "https://plant49-ai.herokuapp.com/",
    },
    {
      imgPath: suicide,
      title: "Ai For Social Good",
      description:
        "Used Natural Language Processing to detect suicide-related posts and users' suicide ideation online, aiding in suicide prevention.",
      ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
      demoLink: "", // Add demo link if available
    },
    {
      imgPath: emotion,
      title: "Face Recognition and Emotion Detection",
      description:
        "Trained a CNN classifier on the FER-2013 dataset with Keras and TensorFlow. The model predicted human emotions with a maximum accuracy of 60.1%. Used OpenCV for face detection and emotion classification.",
      ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
      demoLink: "", // Add demo link if available
    },
  ];

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
          {projectData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

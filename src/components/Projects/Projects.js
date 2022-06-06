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
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
               imgPath="https://i.imgur.com/l8K8lW2.png"
              
              isBlog={false}
              title="ESPN cricinfo"
              description="ESPN cricinfo (formerly known as Cricinfo or CricInfo) is a sports news website exclusively for the game of cricket. The site features news, articles, live coverage of cricket matches (including liveblogs and scorecards), and StatsGuru, a database of historical matches and players from the 18th century to the present."
              link="https://github.com/snoorbasha50/cricinfo_project"
              Techstack="Techstack : HTML,CSS,Javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/Shreyansh051/AJIO_CLONE/raw/main/readimages/Screenshot2%20.png"
              isBlog={false}
              title="Ajio"
              description=" AJIO, a fashion and lifestyle brand, is Reliance Retail’s digital commerce initiative and is the ultimate fashion destination for styles that are handpicked, on trend and at prices that are the best you’ll find anywhere."
              link="https://github.com/Shreyansh051/AJIO_CLONE"
              Techstack="Techstack : HTML,CSS,Javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://camo.githubusercontent.com/12d8a863979ba080c02fe809199f1653aeec9d7e430e04c71f137e6cc866b49f/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3730302f312a4b67795a645a4f75336f5730444163475543634567512e706e67"
              isBlog={false}
              title="Geekbuying"
              description="Geekbuying is become one of the leading E-commerce platforms selling a wide range of consumer electronic gadgets.
              Geekbuying is the ultimate shopping hub for new releases covering smart home products like vacuum cleaners, fitness equipment like treadmills, top of the line home and office furniture, outdoor items"
              link="https://github.com/abhinavBisht94/geekbuying-clone"
              Techstack="Techstack : HTML,CSS,Javascript,Reactjs"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
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
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

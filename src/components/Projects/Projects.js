import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GPTCoLab from "../../Assets/Projects/GPTCoLab.png";
import EchoNote from "../../Assets/Projects/Echonote.png";
import SentiStock from "../../Assets/Projects/SentiStock.png";

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
              imgPath={GPTCoLab}
              isBlog={false}
              title="GPTCoLab"
              description="An enhanced ChatGPT multi-chat web application using React and AWS, giving the GPT acess to features such as a Python interpreter, user files, web browsing, OCR (with pytesseract), image creation, recursive prompting, and multi-modal functionality. "
              ghLink="https://github.com/KyleGrande/GPTCoLab-react"
              demoLink="https://gptcolab.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EchoNote}
              isBlog={false}
              title="EchoNote"
              description=" AI Note Taking React web app using OpenAI’s Whisper and text-davinci-003. Gives accurately transcribed lectures with real-time text-to-speech conversion. Enabling automatic note creation and formatting to markdown or latex to organize transcribed content into well structured, easy-to-read notes."
              ghLink="https://github.com/KyleGrande/EchoNote"
              demoLink="https://echonote.gptcolab.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SentiStock}
              isBlog={false}
              title="SentiStock"
              description="A serverless sentiment analysis web app for stock market predictions using social media and news data. Create your own portfolio to monitor your stocks live sentiment and research sentiment on any stock."
              ghLink="https://github.com/KyleGrande/sentistock-react"
              demoLink="https://main.d2j7xloqlv2uiz.amplifyapp.com/dashboard"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

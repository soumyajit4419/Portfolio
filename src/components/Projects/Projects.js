import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Notes App"
              description="A minimalistic notes app built using React, Tailwind CSS, and Firebase."
              ghLink="https://github.com/Dave-Vermeulen/Notes-App"
              demoLink="https://quicknotes.run.place"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Just For Today"
              description="JustForToday is a revolutionary productivity app designed specifically for individuals with ADHD. We understand the challenges of managing tasks, staying focused, and maintaining a healthy routine."
              ghLink="https://github.com/Dave-Vermeulen/Just_For_Today"
              demoLink="https://www.justfortoday.work.gd"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Gmail Inbox Cleaner"
              description="A Node.js application that helps clean up your Gmail inbox by automatically processing unread emails containing 'unsubscribe' links. It uses the Gmail API to access your inbox and the Natural Language Processing API to process the emails."
              ghLink="https://github.com/Dave-Vermeulen/gmail-inbox-cleaner"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sureco Trading"
              description="This is a one-page website build for SURECO, using JavaScript, HTML, and CSS. The website will be deployed on the purchased domain (sureco.co.za) with existing email accounts and hosting. This is project I took on early in my journey, I come from a business facing background so making promises to hook the client comes easy for me. The story goes something like: A man walks into a mosque and tells the Sheikh he needs a way to increase his business, the young brother responds 'you have found him'."
              ghLink="https://github.com/Dave-Vermeulen/sureco.co.za"
              demoLink="https://sureco.co.za/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fab Feet"
              description="This is a ReactJS based startup and small business website template. It was designed using TailwindCSS and React. The Contact form was made functional using EmailJS. FabFeet is a foot specialist disrupting the scene with the economic prices for specialized podiatry care"
              ghLink="https://github.com/Dave-Vermeulen/fabfeet"
              demoLink="https://www.fabfeet.run.place"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

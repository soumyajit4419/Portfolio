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
import singpass from "../../Assets/Projects/singpass.png";
import dbs from "../../Assets/Projects/dbs.jpg";
import ocbc from "../../Assets/Projects/ocbc.jpg";
import dnata from "../../Assets/Projects/dnata.png";
import fronthausEventApp from "../../Assets/Projects/fronthausEventApp.png";
import resico from "../../Assets/Projects/resico.png";

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
              imgPath={singpass}
              isBlog={false}
              title="Spot the Differences"
              description="The Spot the Differences game for Singpass aims to educate seniors in preventing scam applications."
              ghLink="https://github.com/jsonggan"
              demoLink="https://avpd.holo.sg/game/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbs}
              isBlog={false}
              title="DBS CX Day"
              description="A series of games that engage 5,000+ users and allow them to learn more about DBS."
              ghLink="https://github.com/jsonggan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocbc}
              isBlog={false}
              title="Frank by OCBC"
              description="A real-time updating web app that receives user card designs and displays them with elegant animations."
              ghLink="https://github.com/jsonggan"
              demoLink="https://frank.holo.sg/card"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnata}
              isBlog={false}
              title="News Aggregator"
              description="The Automated News Collector and Management Web App, aims to streamline the process of identifying and managing relevant news articles for dnata employees. The web application automates the retrieval of industry-specific articles from diverse sources, categorizing, summarizing, and facilitates seamless collaboration within the team."
              ghLink="https://github.com/Service-Design-Studio/1d-final-project-2023-sds-2023-team-06"
              demoLink="https://sites.google.com/mymail.sutd.edu.sg/sud-avengers/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fronthausEventApp}
              isBlog={false}
              title="Event Application"
              description="Designed architecture of the mobile app for event attendees so that the app can be easily customized for different events."
              ghLink="https://github.com/jsonggan/fronthaus"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resico}
              isBlog={false}
              title="ResiCo"
              description="Connecting communities together by digitalizing residential notice boards and providing an easier way for residents to talk, ask, and help each other."
              ghLink="https://github.com/jsonggan/ResiCo"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7110657925282463744/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

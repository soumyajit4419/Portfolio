import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              title="Job Tracker"
              description="Personal project to track my job hunt activities and status of each applications. It kees me on track for follow ups and where I'm at in the interview process. <br><b>Stack:</b> Linux, Rails and Tailwind CSS."
              ghLink="https://github.com/AndreaJasper/job-tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Daily Reads"
              description="I have several interests and I'm looking for updates on a daily basis. Instead of going to individual sites, I wanted to play around with site scrapping to pull data from my favorites sites into one location. Built using Node.js and Puppeteer."
              ghLink="https://github.com/AndreaJasper/daily-reads"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DnD Character Archive"
              description="I love playing Dungeons and Dragon, the problem is, I end up with alot of lose paper for each character. While I could use online sources like DnD Beyond, I wanted to practice my coding skills, so I built my own character archive so I can ditch the paper. Built using Rails and Bootstrap."
              ghLink="https://github.com/AndreaJasper/dnd-character-tracker"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

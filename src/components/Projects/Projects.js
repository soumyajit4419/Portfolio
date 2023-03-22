import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import skillShare from "../../Assets/Projects/skillshare.png";

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
              description="Personal project to track my job hunt activities and the status of each application. It was also an excuse to work on implementing authentication into an app. Stack: Linux, Rails and Bootstrap."
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
              description="I love playing Dungeons and Dragon, the problem is, I end up with alot of character sheets. To practice my coding skills, I built a character archive so I can ditch the paper, but save my character stats. Stack: Rails and Bootstrap."
              ghLink="https://github.com/AndreaJasper/dnd-character-tracker"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillShare}
              isBlog={false}
              title="Practice Portfolio"
              description="To stay fresh on my HTML and CSS, I like to write raw code, sans frameworks. Stack: HTML, CSS, Responsive design, Flexbox."
              ghLink="https://github.com/AndreaJasper/old-skillshare-portfolio"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

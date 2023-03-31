import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import tracker from "../../Assets/Projects/jobTracker.png";
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
              imgPath={tracker}
              isBlog={false}
              title="Job Application Tracker"
              description="Personal project to track my job hunt activities and the status of each application. It was also an excuse to work on implementing authentication. Stack: Linux, Rails and Bootstrap."
              ghLink="https://github.com/AndreaJasper/application-tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Workorder App"
              description="This project was inspired by husband's complaints that his work order tracking system was out of date."
              ghLink="https://github.com/AndreaJasper/rails-workorder-app"
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

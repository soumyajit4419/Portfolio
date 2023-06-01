import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tracker from "../../Assets/Projects/jobtrackr.jpg";
import workMate from "../../Assets/Projects/workmate.jpg";
import skillShare from "../../Assets/Projects/skillshare.jpg";
import rollcall from "../../Assets/Projects/rollcall.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Portfolio
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Job Trackr"
              description="A personal Job Tracking app to monitor my job search endeavors, including the progress of every application. In addition, this project provided me with an opportunity to hone my skills in implementing authentication."
              stack="Linux, Rails and Bootstrap."
              ghLink="https://github.com/AndreaJasper/application-tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={workMate}
              isBlog={false}
              title="WorkMate"
              description="Inspired by my husband's grievances about his antiquated work order tracking system, I developed a project that incorporates comprehensive CRUD funcationality and authentication."
              stack="Rails and Bootstrap"
              ghLink="https://github.com/AndreaJasper/rails-workorder-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={rollcall}
              isBlog={false}
              title="RollCall"
              description="As an avid Dungeons and Dragons player, I often accumulate a large number of character sheets. To enhance my coding abilities, I developed a character archive that enables me to do away with paper records while preserving my character's statistics."
              stack="Rails and Bootstrap"
              ghLink="https://github.com/AndreaJasper/dnd-character-tracker"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={skillShare}
              isBlog={false}
              title="Practice Portfolio"
              description="In order to keep my HTML and CSS skills up-to-date, I prefer to write code from scratch, without relying on frameworks. This particular site is designed with responsive layout in mind, emphasizing the use of flex-box."
              stack="HTML, CSS, Responsive Design"
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

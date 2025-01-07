import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ResumeCard from "./ResumeCard";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Past <strong className="purple">Experiences </strong> include
        </h1>
        <p style={{ color: "white" }}>
          Here is what I've done in the past to get to where I am now.
        </p>

        <h2 className="project-heading">
         <strong className="purple">2024 </strong>
        </h2>
        
        <div style = {{border: "solid 1px"}} className="purple"/>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResumeCard
              title="Develop For Good - Enginering Team Lead | October 2024 - Present"
              date="October 2024 - Present"
              className="purple"
              description="I am currently a team lead, working to build metric dashboards and more for 3D-girls-inc. I work on managing and assigning tickets, sprint plans, and more."
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              title="Chartbeat - Frontend Engineer Intern"
              date="June - August 2024"
              description="Optimized component testing for Chartbeat’s design system using React, TypeScript, and SCSS; won a company-wide hackathon by streamlining user permissions and boosting efficiency by 15%; Also participated in daily Agile standups and weekly sprints"
            />
          </Col>


          <Col md={4} className="project-card">
            <ResumeCard
              title="Commvault - UI/UX Intern"
              date ="January 2024"
              description="I interned at Commvault to make the onboarding processes for new engineers more efficient by implementing a React playground where engineers can produce and test Commvault's code components"
            />
          </Col>
        </Row>
        

        <h2 className="project-heading">
         <strong className="purple">2023 </strong>
        </h2>
        
        <div style = {{border: "solid 1px"}} className="purple"/>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResumeCard
              title="CodePath - Advanced Web Dev Certificate"
              date ="September - November 2023"
              description="Developed dynamic full-stack applications weekly in teams of 2-8 using React.js, Express.js, Node.js, SQL, and PostgreSQL, significantly enhancing my proficiency and collaboration skills in full-stack development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              title="TTP - Full Stack Engineer Bootcamp"
              date="June - September 2023"
              description="Mastered Full Stack Development with 100+ hours of dedication, while also learning algos and database management. Delivered 1-3 rigorous weekly projects, including MythMaker and Gitnalysis, both independently and collaboratively in dynamic team settings."
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              title="Art Beyond Site - Full Stack Intern"
              date="July - August 2023"
              description="Collaborated with 50+ interns to optimize data transfer to Drupal, leveraging HTML, CSS, Bootstrap, SaaS, and React to enhance accessibility, improve UI consistency, and deliver faster, inclusive solutions for 100+ clients."
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              title="Justworks - Software Engineer Intern"
              date="January 2023"
              description="Collaborated with 50+ interns to optimize data transfer to Drupal, leveraging HTML, CSS, Bootstrap, SaaS, and React to enhance accessibility, improve UI consistency, and deliver faster, inclusive solutions for 100+ clients."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

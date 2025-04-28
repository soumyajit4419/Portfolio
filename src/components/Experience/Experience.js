import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./data";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Key milestones and checkpoints in my professional journey.
        </p>
        <Row style={{ justifyCONTENT: "center", paddingBottom: "10px" }}>
          {experienceData.map((exp, index) => (
            <Col md={6} className="project-card" key={index}>
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                duration={exp.duration}
                description={exp.description}
                skills={exp.skills}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
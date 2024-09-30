import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./MediaCard";
import Particle from "../Particle";
import specialClinic from "../../Assets/Projects/specialClinic.png";
import peacock from "../../Assets/Projects/peacock.png";
import talkdesk from "../../Assets/Projects/talkdesk.png";
import dominos from "../../Assets/Projects/dominos.png";
import epilot from "../../Assets/Projects/epilot.png";
import MediaCard from "./MediaCard";

function Media() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="highlighted-text">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MediaCard
              imgPath={epilot}
              isBlog={false}
              title="Epilot: Team Leading in Product Engineering"
              link="https://www.youtube.com/watch?v=4G_3dCKBe5E&ab_channel=epilotTech"
            />
          </Col>
          <Col md={4} className="project-card">
            <MediaCard  
              imgPath={epilot}
              isBlog={false}
              title="Epilot"
              description="SpecialClinic is an online clinical management software designed for clinics. This solution streamlines the management of clinical processes, payments, and billing, all within a single web platform."
              link="https://www.epilot.cloud/en"
              role="Product Engineer & Tech Lead"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Media;

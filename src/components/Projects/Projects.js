import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import specialClinic from "../../Assets/Projects/specialClinic.png";
import peacock from "../../Assets/Projects/peacock.png";
import talkdesk from "../../Assets/Projects/talkdesk.png";
import dominos from "../../Assets/Projects/dominos.png";
import epilot from "../../Assets/Projects/epilot.png";

function Projects() {
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
            <ProjectCard
              imgPath={epilot}
              isBlog={false}
              title="Epilot"
              description="SpecialClinic is an online clinical management software designed for clinics. This solution streamlines the management of clinical processes, payments, and billing, all within a single web platform."
              link="https://www.epilot.cloud/en"
              role="Product Engineer & Tech Lead"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={specialClinic}
              isBlog={false}
              title="Special Clinic"
              description="SpecialClinic is an online clinical management software designed for clinics. This solution streamlines the management of clinical processes, payments, and billing, all within a single web platform."
              link="https://www.specialclinic.pt/"
              role="Product Engineer & Founder"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peacock}
              isBlog={false}
              title="Peacock"
              description="Peacock is a premier streaming service offering a rich library of on-demand series, movies, and original content alongside live sports and news. It features a user-friendly interface, personalized recommendations, and diverse programming to cater to a wide audience."
              link="https://www.peacocktv.com/"
              role="Software Engineer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talkdesk}
              isBlog={false}
              title="Talkdesk"
              description="Talkdesk is an innovative cloud contact center platform that empowers businesses to continuously improve customer satisfaction. It offers an intuitive interface, robust call handling features, and seamless integration with various business tools, making it an ideal solution for enhancing customer support and engagement."
              link="https://www.talkdesk.com/"
              role="Software Engineer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dominos}
              isBlog={false}
              title="Dominos Pizza"
              description="The official website for Domino's Pizza in the UK serves as a digital hub for pizza lovers, offering a streamlined online ordering system, current deals, and a customizable menu to ensure a convenient and enjoyable customer experience."
              link="https://www.dominos.co.uk/"
              role="Software Engineer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

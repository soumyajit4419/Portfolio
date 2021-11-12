import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import script from "../../Assets/Projects/script.png";
import rpi from "../../Assets/Projects/rpi.png";
import editor from "../../Assets/Projects/codeEditor.png";
import connect from "../../Assets/Projects/connect.png";
import diversify from "../../Assets/Projects/diversify.png";
import auto from "../../Assets/Projects/autogm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="site-color">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect}
              isBlog={false}
              title={<div>"Connect US"
              description="Collaborated with a team of Software Engineers, UX Designers, and Data Scientists to build a creative and high impact application focusing on immigrant relocation to the US, using open source federal government data."
              "MERN Stack app with KMeans clustering model integration."
              
              "Features include:
              --JWT User Auth,
              --Google Geocoder, Places, Photos and Map API integration
              --Wikipedia API,
              --Custom Carousel image displays,
              --Styled with Tailwind UI and CSS
              --Custom API calls to/from a KMeans clustering machine learning model using Python and Flask"</div>}
              link="https://github.com/Cmosley/where-should-we-live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={script}
              isBlog={false}
              title="Script Studio"
              description="ScriptStud.io is a platform which is easy for a casual user to interface with and allows users to upload examples of well-written code with contextual information about use. It will also be presented in an accessible manner which is easy for a user to read with minimal distraction or superfluous on-page content. This will allow engineers to save, share, and find code for their projects efficiently."
              link="https://github.com/Cmosley/ScriptStud.io-public"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diversify}
              isBlog={false}
              title="Diversify"
              description="This application focuses on improving diversity in the workplace. Employees can research companies to gage how diverse a certain company is or isn't and check to see if that company is working on improving their Diversity & Inclusion practices. Companies can submit information on their D&I initiatives, take the Diversify D&I Quiz to see what areas they need to improve on, and find resources on how to improve their D&I"
              link="https://github.com/Cmosley/SS-BIPOC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auto}
              isBlog={false}
              title="Auto-GM"
              description="Business KPI dashboard which plots past sales and predicts future sales using Linear Regression algorithms"
              link="https://auto-gm.herokuapp.com/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

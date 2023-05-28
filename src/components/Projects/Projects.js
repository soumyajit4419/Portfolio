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
import hmp from "../../Assets/Projects/hmp.png";
import smartnaka from "../../Assets/Projects/smartnaka.png";
import gc from "../../Assets/Projects/gc.png";
import wiss from "../../Assets/Projects/wiss.png";

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
              imgPath={gc}
              isBlog={false}
              title="AirBorneX"
              description="AirBorneX is a web application developed for a drone delivery company to facilitate efficient and timely deliveries. This web application provides a user-friendly interface for users to request drone deliveries and track their packages in real-time. The application also provides admins with the necessary tools to manage all delivery requests efficiently and ensure timely deliveries."
              ghLink="https://github.com/SamMathelete/gc-webathon"
              demoLink="https://gc-webathon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hmp}
              isBlog={false}
              title="Hostel Management Portal"
              description="The Hostel Management Portal streamlines complaint lodging for students, ensuring fast and efficient processing. Students can track complaint status (Accepted/Rejected/Pending) while administrators can monitor and act on complaints. Escalation to higher-ranked officers is possible when needed. This portal enhances complaint management, transparency, and prompt resolution."
              ghLink="https://github.com/lalit-mohanani/Hostel-Complain-Portal"
              demoLink="https://hmp.webnd-iitbbs.org/index.php"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartnaka}
              isBlog={false}
              title="Smart Naka"
              description="Smart Naka is an app designed for the Ethos Hackathon - IIT Guwahati's Smart Naka Problem Statement. It provides real-time access to a central government database of stolen vehicles, allowing users to verify if a queried vehicle is stolen. The app offers two search options: Searching by Registration Number and Advanced Search, where users can manually input vehicle details. With its intuitive interface, Smart Naka enables efficient and accurate identification of stolen vehicles. Click on the install button after opening demo in your mobile."
              ghLink="https://github.com/hv789/smart-naka"
              demoLink="https://expo.dev/accounts/hv789/projects/smart-naka/builds/ce701497-2a84-4bd1-b93b-01bb7d6e226e"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiss}
              isBlog={false}
              title="Wissenaire '23"
              description="Was a frequent contributor to the Wissenaire '23 app. Wissenaire is the annual techno-management fest of IIT Bhubaneswar."
              ghLink=""
              demoLink="wissenaire.org"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

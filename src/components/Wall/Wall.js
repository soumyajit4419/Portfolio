import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WallCard from "./WallCard";
import Particle from "../Particle";

// Images for the certifications
import cert1 from "../../Assets/Certificates/cert1.jpg";
import cert2 from "../../Assets/Certificates/cert2.jpg";
import cert3 from "../../Assets/Certificates/cert3.jpg";
import cert4 from "../../Assets/Certificates/cert4.jpg";
import cert5 from "../../Assets/Certificates/cert5.png";
import cert6 from "../../Assets/Certificates/cert6.jpg";
import cert7 from "../../Assets/Certificates/cert7.jpg";
import cert8 from "../../Assets/Certificates/cert8.jpg";
function Wall() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert3}
              certLink="https://www.udemy.com/certificate/UC-9c295a32-4f7e-47bb-9e0d-40a735863348/"
            />
          </Col>

          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert2}
              certLink="https://coursera.org/share/cb827151f9c8db5e17f6745f5fe7dc85"
            />
          </Col>
          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert6}
              certLink="https://learn.kodekloud.com/user/certificate/51500659-36c9-44ef-a5ac-78b451a57b5e"
            />
          </Col>
          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert1}
              certLink="https://coursera.org/share/67dda612c2228fa549adea349bccc0ea"
            />
          </Col>

          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert4}
              certLink="https://maharatech.gov.eg/mod/customcert/view.php?id=12571&downloadown=1"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert5}
              certLink="https://intranet.alxswe.com/certificates/XnG28pCxc7"
            />
          </Col>
          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert7}
              certLink="https://learn.kodekloud.com/user/certificate/e8507b78-5fc2-4096-b638-161ae9c6c7bb"
            />
          </Col>
          <Col md={4} className="project-card">
            <WallCard
              imgPath={cert8}
              certLink="https://maharatech.gov.eg/mod/customcert/view.php?id=16004&downloadown=1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Wall;

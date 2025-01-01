import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Contact Me</strong>
        </h1>
        <p style={{ color: "white" }}>Here's how you can reach me</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ContactCard
              title="Reach Me Here"
              email="hafeefas47@gmail.com"
              description=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

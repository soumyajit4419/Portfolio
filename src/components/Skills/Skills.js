import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Card className="project-card-view">
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              <strong>Languages</strong>
              <div style={{ marginBottom: 20 }}>  Python • Go • Kotlin • Java  • C++/C • JavaScript • SQL  • HTML/CSS • R</div>

              <strong>Frameworks/Libraries</strong>
              <div>React • Node.js • Express • Android Studio • PyTorch  • MongoDb • Git  </div>
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>
    </Container>
  );
}

export default Skills;

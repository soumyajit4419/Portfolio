import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Github from "./Github"
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
        <Github className="about-section" />
      </Container>
    </Container>
  );
}

export default Skills;

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
              <div style={{ marginBottom: 20 }}>  Python • Golang • C++ • Kotlin • Java  • C • JavaScript • SQL • R • Bash • HTML/CSS</div>
              <strong>Frameworks/Libraries</strong>
              <div>React • Node.js • Express • Android Studio • PyTorch  • MongoDb • Git • PostgreSQL • AWS  </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Github className="about-section" />
      </Container>
    </Container>
  );
}

export default Skills;

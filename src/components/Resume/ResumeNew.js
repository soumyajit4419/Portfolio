import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", paddingTop: "50px", paddingBottom: "50px" }}>
          <p>Resume will be updated soon.</p>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

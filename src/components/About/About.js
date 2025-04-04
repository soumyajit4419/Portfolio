import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">je suis</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          <strong className="purple">Connaissances</strong> techniques
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong>
        </h1>
        <Toolstack />

     
      </Container>
    </Container>
  );
}

export default About;

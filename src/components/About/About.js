import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import SubDown from "../SubDown";

function About() {
  return (
    <Container fluid className="about-section">
      <SubDown id="#skills"/>
      <Particle />
      <Container>
        <Row className="about-section-main">
          <Row>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              // paddingBottom: "50px",
            }}
            >
            <h1 style={{ fontSize: "2.1em" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          </Row>
        </Row>
        <h1 className="project-heading" id="skills">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

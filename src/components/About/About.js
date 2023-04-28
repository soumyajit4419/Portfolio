import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
// import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import WebDev from "./WebDev";
import DataScience from "./DataScience";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
              Learn more about <strong className="purple">me</strong>
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
        <h1 className="project-heading">
          Web <strong className="purple">Development </strong>
        </h1>

        <WebDev />
        <h1 className="project-heading">
          Data <strong className="purple">Engineering </strong>
        </h1>

        <DataScience />
{/* 
        <h1 className="project-heading">
          It doesn't <strong className="purple">end there </strong>
        </h1>

        <Techstack /> */}

        <h1 className="project-heading">
          Tool<strong className="purple">kit</strong>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

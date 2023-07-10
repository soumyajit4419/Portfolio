import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Certifications from "../About/Certifications";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
                    My <strong className="purple">Certifications </strong>
                </h1>
                <br />
                <br />

            <Certifications />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />



        <Github />
      </Container>
    </Container>
  );
}

export default About;

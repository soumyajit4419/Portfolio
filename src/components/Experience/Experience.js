import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "../About/Github";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import ExperienceCard from "./ExperienceCards";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <ExperienceCard
              title="Stark Softwares"
              position="Software Developer"
              timePeriod="May 2018 - August 2018"
              description1="Performed troubleshoot to identify software performance issues"
              description2="Provided relevant course material and helped improve their average by more than 15%"
              description3="Effectively wrote clean and reusable code for designing templates for their clients."
              linkProject="https://github.com/J268sing/iRead"
            />
     
        <Github />
      </Container>
    </Container>
  );
}

export default Experience;

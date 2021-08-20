import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCards";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Experience
        </h1>

        <div style={{ paddingTop: 50 }}></div>
        <ExperienceCard
          title="SOCA"
          position="Software Engineer"
          timePeriod="June 2021 - July 2021"
          description1="Designed and developed an interactive website for a cricket league played in Soutern Ontario since 1895."
          description2="Revamped the entire User Interface to display stats of all teams dynamically to ensure high traffic and responsive user interface."
          description3="Currently has about 1k monthly users."
          linkProject="https://github.com/J268sing/iRead"
        />

        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Petro-Wagon"
          position="Software Engineer"
          timePeriod="August 2019 - August 2020"
          description1="Pioneered the planning and execution for formation of the company's successfull pilot project."
          description2="Developed Android app for a Chandigarh based startup Petrowagon."
          description3="Gained over 200 B2B regular clients in the span of 1 month."
          linkProject="https://github.com/J268sing/iRead"
        />
        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Stark Softwares"
          position="Software Developer"
          timePeriod="May 2018 - August 2018"
          description1="Performed troubleshoot to identify software performance issues."
          description2="Maintained existing and functionality during assimilation into ongoing operations of web business."
          description3="Effectively wrote clean and reusable code for designing templates for their clients."
          linkProject="https://github.com/J268sing/iRead"
        />

      </Container>
    </Container>
  );
}

export default Experience;

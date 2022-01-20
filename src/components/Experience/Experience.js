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
          position="Web Developer"
          timePeriod="June 2021 - August 2021"
          description1="Built an interactive website in React for a cricket league played in Southern Ontario by 16 teams every year"
          description2="Enhanced load time by 15% by implementing website’s state to be managed using redux and lazy loading the images"
          description3="Increased traffic by 50% by rewriting the entire UI using responsive react components and user interactive features          "
          linkProject="https://github.com/J268sing/iRead"
        />

        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Petro-Wagon"
          position="Software Engineer"
          timePeriod="August 2019 - September 2020"
          description1="Developed an Android app for an online fuel delivery service based startup from scratch"
          description2="Pioneered company’s successful pilot project and beta version of the app gained over 200 B2B clients in a span of 1 month"
          description3="Maintained clean and structured code using MVVM architecture to enhance reusability and optimized app performance"
          linkProject="https://github.com/J268sing/iRead"
        />
        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Stark Softwares"
          position="Software Developer"
          timePeriod="May 2018 - August 2018"
          description1="Automated testing that will be performed at all layers of programming interfaces and debugged UI/UX issues"
          description2="Maintained existing and functionality during assimilation into ongoing operations of web business"
          description3="Effectively wrote clean and reusable code for designing templates for their clients and performed troubleshooting"
          linkProject="https://github.com/J268sing/iRead"
        />

      </Container>
    </Container>
  );
}

export default Experience;

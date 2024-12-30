import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Past <strong className="purple">Experiences </strong> include
        </h1>
        <p style={{ color: "white" }}>
          Here is what I've done in the past to get to where I am now.
        </p>

        <h2 className="project-heading">
         <strong className="purple">2024 </strong>
        </h2>
        
        <div style = {{border: "solid 1px"}} className="purple"/>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Develop For Good Enginering Team Lead Oct 2024 - Present"
              className="purple"
              description="I am currently a team lead, working to build metric dashboards and more for 3D-girls-inc. I work on managing and assigning tickets, sprint plans, and more."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Myth Maker"
              description="With a team of 4, I built 'Myth Maker,' an interactive fiction platform that allows users to create their own choose-your-own-adventure stories. It’s built with REST API, React, Redux, MongoDB, and Mongoose, following the full development life cycle"
            />
          </Col>
        </Row>

        <h2 className="project-heading">
         <strong className="purple">2023 </strong>
        </h2>
        
        <div style = {{border: "solid 1px"}} className="purple"/>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Gitnalysis"
              description="Developed Gitnalysis with a team of 8, a web application that provides developers with in-depth repository statistics, trends, and data visualizations.
              Utilized a tech stack of React, Redux, Node.js, Express, and Sequelize to build a responsive platform with real-time updates. Implemented key features like Average Lead Time for Change, Pull Request Merge Success Rate, and visualizations using Nivo."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="To-do List"
              description="Created a simple yet functional To-Do List app using React. The app enables users to add and delete tasks while maintaining a clean and responsive interface for seamless task management."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

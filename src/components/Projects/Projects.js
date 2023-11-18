import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import horseCreator from "../../Assets/Projects/horse_creator.png";
import artMuseum from "../../Assets/Projects/art_museum.png";
import blogWebsite from "../../Assets/Projects/blog_website.png";
import horseBattle from "../../Assets/Projects/horse_battle.png";
import noteTaker from "../../Assets/Projects/note_taker.png";
import weatherApp from "../../Assets/Projects/weather_app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artMuseum}
              isBlog={false}
              title="ArtHub"
              description="Online art museum that allows users to view historic art pieces and learn the background history of their favorite artists. Collaborated with teammates in UCB coding bootcamp to build."
              ghLink="https://github.com/t2na/project_ArtHub"
              demoLink="https://museum-gallery-d60bff79cfff.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogWebsite}
              isBlog={false}
              title="Blog Website"
              description="A fantasy football blog page built following the MVC paradigm. Users can publish their blog posts and comment on others' blog posts. Built with JavaScript, CSS, and Handlebars."
              ghLink="https://github.com/t2na/blog-website"
              demoLink="https://fantasy-blog-post-website-d658dedf5ab3.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horseBattle}
              isBlog={false}
              title="Horse Battle"
              description="An online game that leverages a backend 'horse API' to randomly generate the names and race tracks for a given horse. The JavaScript logic I wrote then randomly generates horse stats which are used to have the horses 'race' against each other and declare a victor."
              ghLink="https://github.com/t2na/BerkeleyRacingClub"
              demoLink="https://tannerrhines.github.io/BerkeleyRacingClub/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horseCreator}
              isBlog={false}
              title="Horse Creator"
              description="Another horse-themed application. This time, one that allows users to log in to create their own horse. They're able to give the horse a name, breed and choose what stats to give them, then have the horse saved to the home page. "
              ghLink="https://github.com/t2na/my-horse-creator"
              demoLink="https://horse-creator-app-9839a5a7a948.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteTaker}
              isBlog={false}
              title="Note Taker"
              description="A note taking application that I wrote the backend for. The application allows you to save notes to a database, as well as delete them. THe project was built using express.js for the backend routes that facilitate the creating, saving, and deleting."
              ghLink="https://github.com/t2na/note-taking-app"
              demoLink="https://note-creator-app-80d5bc29a5a8.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather Forecast"
              description="This app allows you to check the current and forecasted weather for a given city. The application was built using the openweathermap API, and leveraged JSON objects, along with JavaScript and HTML, to neatly display the upcoming weather in your area"
              ghLink="https://github.com/t2na/city-weather-forecast"
              demoLink="https://t2na.github.io/city-weather-forecast/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
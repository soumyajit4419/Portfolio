import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gitnalysis from "../../Assets/Projects/gitnalysis.png";
import mythMaker from "../../Assets/Projects/mythMaker.png";
import pokeRadar from "../../Assets/Projects/pokeRadar.png"
import todoList from "../../Assets/Projects/todoList.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mythMaker}
              isBlog={false}
              title="Myth Maker"
              description="With a team of 4, I built 'Myth Maker,' an interactive fiction platform that allows users to create their own choose-your-own-adventure stories. It’s built with REST API, React, Redux, MongoDB, and Mongoose, following the full development life cycle"
              ghLink="https://github.com/dhungwt/mythmaker_frontend"
              demoLink="https://mythmakers.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokeRadar}
              isBlog={false}
              title="Poke Radar"
              description="Poke Radar is a Pokémon web app built with TypeScript and React. As Frontend Lead, I integrated PokéAPI to display Pokémon stats, abilities, and types. It features a responsive design for an optimized user experience."
              ghLink="https://github.com/segfal/pokemon_queries"
              demoLink="https://poke-radar.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitnalysis}
              isBlog={false}
              title="Gitnalysis"
              description="Developed Gitnalysis with a team of 8, a web application that provides developers with in-depth repository statistics, trends, and data visualizations.
              Utilized a tech stack of React, Redux, Node.js, Express, and Sequelize to build a responsive platform with real-time updates. Implemented key features like Average Lead Time for Change, Pull Request Merge Success Rate, and visualizations using Nivo."
              ghLink="https://github.com/hafeefas/Gitnalysis_FE"
              demoLink="https://gitnalysis-front-end.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoList}
              isBlog={false}
              title="To-do List"
              description="Created a simple yet functional To-Do List app using React. The app enables users to add and delete tasks while maintaining a clean and responsive interface for seamless task management."
              ghLink="https://github.com/hafeefas/todo-list"
              demoLink="https://hafeefas.github.io/todo-list/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitnalysis}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

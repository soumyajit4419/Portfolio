import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Chatify is a powerful and seamless real-time messaging application built with the MERN stack(MongoDB, Express, React, Node.js). It allows users to engage in instant, real-time chats with features that support both one-on-one conversations. The app leverages Socket.IO for live messaging and notifications, ensuring that users can communicate without delays."
              ghLink="https://github.com/harpreetkaur7879/chat-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="Weather App is a sleek and intuitive application that provides real-time weather information, built with React, Material UI, and integrated with a weather API. Whether you're planning your day or traveling to a new location, the app gives you accurate, up-to-date weather forecasts, including current conditions, temperature, humidity, wind speed, and more."
              ghLink="https://github.com/harpreetkaur7879/Weather-Application"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Password Generator"
              description="The Password Generator App allows users to generate strong, random passwords based on a specified length. The app provides a Download to Clipboard functionality to easily copy the password, ensuring it can be securely pasted wherever necessary. Built using React hooks and Tailwind CSS."
              ghLink="https://github.com/harpreetkaur7879/Generate-Password"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Currency Convertor"
              description="The Currency Converter App enables users to convert one currency to another using live exchange rates from an external API. Built with React, Tailwind CSS, and React Hooks, this app provides a seamless and intuitive user experience. It features a currency swapping functionality that allows users to easily swap between the From and To currencies with a simple click, making it convenient for quick conversions."
              ghLink="https://github.com/harpreetkaur7879/currencyConvertor"
            //   demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Spotify Prototype"
              description="The Spotify Clone is a user interface design that mimics the look and feel of the popular music streaming platform, Spotify. This project is created using HTML and CSS only and focuses on replicating the visual components of Spotify's app, such as the navigation bar, playlists, music controls, and album covers. It also includes a stylish custom scrollbar to enhance the user experience."
              ghLink="https://github.com/harpreetkaur7879/SpotifyPrototype"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SimonSays Game"
              description="The Simon Says game is a memory game where players must follow a sequence of colored lights and sounds in the correct order. The game will provide a sequence of colors and sounds, and the player must repeat that sequence. As the game progresses, the sequence gets longer and more complex. The game will be built using HTML, CSS, and JavaScript"
            
              ghLink="https://github.com/harpreetkaur7879/SimonSay-Game"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

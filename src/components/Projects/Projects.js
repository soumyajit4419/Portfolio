import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import iReadLogo from "../../Assets/Projects/iRead.jpg";
import socaCricketLogo from "../../Assets/Projects/socaCricketLogo.jpg";
import PyTorchLogo from "../../Assets/Projects/PyTorch.png";
import shopifyLogo from "../../Assets/Projects/shopifylogo.jpg";
import toDo from "../../Assets/Projects/todo.jpg";
import Chess from "../../Assets/Projects/Chess.jpg";
import TVscriptLogo from "../../Assets/Projects/TVscript.png";
import FlowerPredictionLogo from "../../Assets/Projects/Flower-Prediction.png";

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
              imgPath={socaCricketLogo}
              isBlog={false}
              hasWebsite={true}
              title="SOCA-Cricket"
              description="SOCA-Cricket is a website designed for Southern Ontario Cricket Association(SOCA). It displays all the information about the association and the events that takes place in the league. SOCA league is played every year in summer and there are 16 teams playing for the trophy in 2021 season"
              linkProject="https://github.com/J268sing/SOCA-Cricket"
              link="http://www.socacricket.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iReadLogo}
              isBlog={false}
              hasWebsite={false}
              title="iRead"
              description="iRead is an all-in-one book reading app for android devices. The robust and well-designed app allows you to read books 
              offline any time, anywhere. A reader gets access to more than 1 million free books with
              categories such as fictional, historical, romance, scientific, magazines, comics and many more. Also, you have an option 
              to filter your favourite books and store them separate. The app uses google api for all its search results and recommendations. 
              "
              linkProject="https://github.com/J268sing/iRead"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chess}
              isBlog={false}
              hasWebsite={false}
              title="Chess"
              description="A chess game implemented in C++ by using OOP principles. It uses Min-Max algorithm to generate optimal computer moves to increase level of difficulty."
              linkProject="https://github.com/J268sing/cpp/tree/master/Game-of-chess"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PyTorchLogo}
              isBlog={false}
              hasWebsite={false}
              title="Deep Learning PyTorch"
              description="This contains jupyter notebooks of implementations of various machine learning topics like transfer learning, inference and validation, maxpooling visualization etc."
              linkProject="https://github.com/J268sing/deep-learning-PyTorch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlowerPredictionLogo}
              isBlog={false}
              hasWebsite={false}
              title="Flower Prediction"
              description="Trained a CNN classifier using 'VGG19 model' with PyTorch backened. The classifier succesfully predicts the species of flower from input flower image with an accuracy of 85%. "
              linkProject="https://github.com/J268sing/Flower-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TVscriptLogo}
              isBlog={false}
              hasWebsite={false}
              title="TV-Script-Generator"
              description="Using Natural Language Processing, trained a recurrent neural network (RNN) that generates small new dialogues for Simpson's TV script"
              linkProject="https://github.com/J268sing/TV-Script-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopifyLogo}
              isBlog={false}
              hasWebsite={false}
              title="Shopify Project"
              description="An android app that diplay at displays a Custom Collections list page and a Collection Details page of products of a Merchant. This project was made as a part of shopify Mobile Dev Challenge.This app uses shopify's api to show the items and was built in android studio."
              linkProject="https://github.com/J268sing/shopify-project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDo}
              isBlog={false}
              hasWebsite={false}
              title="To Do"
              description="A productivity app where users can organize their daily tasks to make the most out of the day consistently"
              linkProject="https://github.com/J268sing/To-Do-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heart from "../../Assets/Projects/human-heart.png";
import imgcla from "../../Assets/Projects/Img_classifier.jpg";
import fd from "../../Assets/Projects/fraud-detection.png";
import NLP from "../../Assets/Projects/NLP.jpg"
import instaClone from "../../Assets/Projects/instagramclone.png";
import MB from "../../Assets/Projects/MovieBlitz.png";

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
              imgPath={heart}
              isBlog={false}
              title="Heart Failure Prediction Web App"
              description="
              Machine Learning model that can predict if patient has a chance of heart failure or not with the help of the infomation entered by the user. Our Model works on Random Forest Classification which is around 94 % accuracte in my case.
              "
              ghLink="https://github.com/EshanJairath/ML_Heart-Failure"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgcla}
              isBlog={false}
              title="Image Classifer"
              description="A CNN (Convolution Neural Network) model trained on the CIFAR-10 dataset which gives 86% on the test set and manages to predict random images from every category in the dataset correctly."
              ghLink="https://github.com/EshanJairath/CNN-image-Classifier-on-CIFAR-10"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fd}
              isBlog={false}
              title="SOM Fraud Detection "
              description="
              The goal of SOM is to provide a data visualization tool that aids in the understanding of high-dimensional data by minimizing the dimension of data to map. SOM also represents the concept of clustering by grouping similar data together. I created a simple project using SOM to identify credit card fraud and return the customer IDs of the fraudulent customers."
              ghLink="https://github.com/EshanJairath/SOM_fraud-detection"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NLP}
              isBlog={false}
              title="Restaurant Review Prediction"
              description="A fully functional review prediction system that uses NLP to detect positive and negative reviews of a restaurant. Technologies used - Deep Learning, Natural Language Processing, SVM, Python"
              ghLink="https://github.com/EshanJairath/Restaurant-review-prediction-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaClone}
              isBlog={false}
              title="Instagram Clone - Pics-Watch"
              description="An Instagram clone web application made with react.js and firebase for user authentication, data storage and hosting."
              ghLink="https://github.com/EshanJairath/PicsWatch-Insta-clone"
              demoLink="https://instagram-clone-picswatch.web.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MB}
              isBlog={false}
              title="MovieBlitzz"
              description="React Web Application that uses the movie database (TMDB) to showcase lastest Movies and TV shows "
              ghLink="https://github.com/EshanJairath/MovieBlitz"
              demoLink="https://movieblitz-7feda.web.app/"       
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          To view more of my <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "cyan" }}>
        checkout my GitHub.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;

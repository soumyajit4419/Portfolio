import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg"
import bmi from "../../Assets/Projects/bmi.jpg"
import bookstore from "../../Assets/Projects/bookstore.jpg"
import competitiveprogramming from "../../Assets/Projects/competitiveprogramming.jpg"
import socialmedia from "../../Assets/Projects/socialmedia.jpg"
import tour2 from "../../Assets/Projects/tour2.jpg"
import gender from "../../Assets/Projects/gender2.jpg"
import eye from "../../Assets/Projects/eye2.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Trachoma Detection"
              description="We created a trachoma detection system integrated with a mobile app. It uses image analysis to identify trachoma, enabling early intervention for this eye disease."
              ghLink="https://github.com/natiyeshi/clearSight"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Online Bookstore"
              description="This is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). I worked with a team and it was great experiance"
              ghLink="https://github.com/fuad-miftah/Book-Store"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={competitiveprogramming}
              isBlog={false}
              title="Competitive Programing"
              description="As a passionate competitive programmer, I have successfully tackled nearly 500 programming questions, Improvong my skills and gaining a deep understanding of various algorithms and data structures along the way."
              ghLink="https://github.com/fuad-miftah/competitive-programing"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia}
              isBlog={false}
              title="Social Media Api"
              description="Recently I worked as a backend enginer at Eskalate. As a team we built a social media API using .NET Core, enabling seamless integration of social media functionalities."
              ghLink="https://github.com/ibsa-abraham-a2sv/aastu-socialmedia-api-team-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Personal Blog Webapp using Node.js"
              description="This is a personal blog webapp build with node.js and express.js. It uses ejs as a templating engine and mongodb as a database. It includes a convenient Google login and signup feature"
              ghLink="https://github.com/fuad-miftah/personal-blog-webapp-node.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gender}
              isBlog={false}
              title="Gender Classification using Voice"
              description="I have developed a gender detection model using voice, utilizing machine learning techniques to analyze voice patterns and determine gender. This model enhances applications such as voice assistants and user verification systems."
              ghLink="https://colab.research.google.com/drive/1uzuaQmxM2NUtC2UC-aFBZOnr9WMptSpI?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour2}
              isBlog={false}
              title="Full stack Tour and Travel Website"
              description="For our class IP2 project, our team collaborated to create this full stack tour and travel website using PHP and plain HTML, CSS, and JavaScript. It provides a comprehensive platform for booking cars, reserving hotels, selecting tour guides, and exploring the best tourist attraction areas in Ethiopia."
              ghLink="https://github.com/SectionB-SWEG2012Batch-G3/Tour-and-Travel-Full-Stack-WebDevTeam"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmi}
              isBlog={false}
              title="BMI Calculator using Node.js"
              description="I created a BMI calculator using Node.js, following core principles, to provide a simple and efficient way for users to calculate their Body Mass Index (BMI)."
              ghLink="https://github.com/fuad-miftah/bmi-calculator-node"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

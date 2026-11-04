
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Imágenes originales de la plantilla (comentadas).
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// Imagen del proyecto GALAH
import galah from "../../Assets/Projects/galah_project.png";
import globular_cluster from "../../Assets/Projects/binary_fraction.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos</strong>
        </h1>

        <p style={{ color: "white" }}>
          Una selección de algunos de mis proyectos.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galah}
              isBlog={false}
              title="GALAH DR4: Random Forest para la Vía Láctea"
              description="Desarrollo de modelos de aprendizaje automático mediante Random Forest, utilizando datos espectroscópicos de más de 900.000 estrellas del catálogo GALAH DR4. El proyecto explora la clasificación de las distintas componentes de la Vía Láctea, la predicción de abundancias químicas y la estimación de edades estelares a partir de su composición química."
              ghLink="https://github.com/pablo-dz/GALAH-Galactic-Archaeology"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globular_cluster}
              isBlog={false}
              title="Fracción binaria en cúmulos globulares: Gaia DR3 + MIST"
              description="Estimación de la fracción de estrellas binarias de secuencia principal (MS-MS) en ocho cúmulos globulares, utilizando datos astrométricos y fotométricos de Gaia DR3 e isócronas MIST. El proyecto implementa el método de identificación de binarias de Pang et al. (2023a) y realiza un análisis preliminar de la relación entre la fracción binaria y la edad de los cúmulos."
              ghLink="https://github.com/pablo-dz/gaia-binary-stars"
            />
          </Col>

          {/*
          =====================================================
          PROYECTOS ORIGINALES DE LA PLANTILLA
          =====================================================

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Bits-0f-C0de"
              description="My personal blog containing articles about programming and web development."
              ghLink="https://github.com/soumyajit4419/Blogs"
              demoLink="https://blogs-sigma-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code editor supporting multiple programming languages."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor-io.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="A web application that uses machine learning to identify plant species."
              ghLink="https://github.com/soumyajit4419/Plant-AI"
              demoLink="https://plant-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI for Social Good"
              description="A project using artificial intelligence to address social challenges."
              ghLink="https://github.com/soumyajit4419/AI-for-Social-Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A computer vision project for face recognition and emotion detection."
              ghLink="https://github.com/soumyajit4419/Face-Recognition"
            />
          </Col>

          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

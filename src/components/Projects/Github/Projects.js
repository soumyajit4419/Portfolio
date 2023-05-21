import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";
// import bitsOfCode from "../../Assets/Projects/blog.png";
function GHProjects() {
    const [githubData, setGithubData] = useState([])

    const fetchData = () => {
        return fetch(`https://api.github.com/users/NeonGamerBot-QK/repos`)
          .then((response) => response.json())
          .then((data) => setGithubData(data));
      }
      useEffect(() => {
        fetchData()
      }, [])
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
          {githubData.map(function (project) {
            return (
              <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                  title={project.full_name}
                  description={project.description}
                  link={project.html_url}
                  {...project}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      e
    </Container>
  );
}

export default GHProjects;

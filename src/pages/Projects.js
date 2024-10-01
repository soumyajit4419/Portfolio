import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle.js'
import projectData from '../data/projectData.js'
import '../styles/Projects.css'

function Projects() {
  return (
    <Container fluid className="project-section" data-testid="project-section">
      <Particle />

      <Container>
        {/* Title and subtitle */}
        <h1 className="project-heading" data-testid="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }} data-testid="project-subtitle">
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects */}
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {projectData.map((project, index) => (
            <Col md={4} className="card-container" key={index}>
              {React.cloneElement(project, { index })}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects

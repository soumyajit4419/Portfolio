import React from 'react'
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from './Techstack';
import Toolstack from "./Toolstack"

const Skills = () => {
  return (
    <Container fluid className="about-section">
    <Particle />
    <Container>
    <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
    
    <Techstack/>
    <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
    <Toolstack/>
    </Container>
    </Container>
  )
}

export default Skills
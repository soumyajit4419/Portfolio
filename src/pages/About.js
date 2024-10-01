import React from 'react'
import { Container } from 'react-bootstrap'
import AboutMe from '../components/About/AboutMe.js'
import GithubContributions from '../components/About/GithubContributions.js'
import TechStack from '../components/About/TechStack.js'
import ToolStack from '../components/About/ToolStack.js'
import Particle from '../components/Particle.js'
import '../styles/About.css'

function About() {
  return (
    <Container fluid className="about-section" data-testid="about-section">
      <Particle />

      <Container>
        <AboutMe />
        <TechStack />
        <ToolStack />
        <GithubContributions />
      </Container>
    </Container>
  )
}

export default About

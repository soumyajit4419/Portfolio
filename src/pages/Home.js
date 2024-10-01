import React from 'react'
import { Container } from 'react-bootstrap'
import Greeting from '../components/Home/Greeting.js'
import Introduction from '../components/Home/Introduction.js'
import Particle from '../components/Particle.js'
import '../styles/Home.css'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" data-testid="home-section">
        <Particle />

        {/* Greeting component */}
        <Container className="home-content">
          <Greeting />
        </Container>

        {/* Introduction component */}
        <Introduction />
      </Container>
    </section>
  )
}

export default Home

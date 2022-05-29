import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import colour from '../../Assets/Projects/colour-moods.png';
import portfolio from '../../Assets/Projects/portfolio.png';
import hubert from '../../Assets/Projects/hubert-octopus.png';
import ball from '../../Assets/Projects/self-care-8-ball.png';
;

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          A <strong className='orange'>Portfolio </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Some of my creative adventures with code.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={colour}
              isBlog={false}
              title='Colour Moods'
              description='This was my first React.js project. Each colour is My goal is to load in multiple pallets and create a mood-ring site that offers self-care suggestions based upon the colours. It is not there yet!'
              link='http://localhost:8080/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title='Level-Up-Portfolio'
              description="This website has been an adventure in React.js, Bootstrap, breaking things, and using Google. 
              I absolutely forked someone else's GitHub and used Node.js to install the foundation. I learn best by taking things apart
              and putting them back together again.   "
              link='http://localhost:3000/'
            />
          </Col>

           <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ball}
              isBlog={false}
              title='Self-Care 8 Ball'
              description='This is a simple React & JavaScript project taking the concept of a magic 8 ball and putting my own spin on it. 
              I wanted a way to explore with JavaScript using a tutorial that I could deconstruct and reimagine.'
              link='http://localhost:3002/self-care-8-ball'
            />
          </Col>
          <Col md={6} className='project-card'>
            <ProjectCard
              imgPath={hubert}
              isBlog={false}
              title='Hubert Octopus'
              description="When I started working on this portfolio site, I knew I wanted an animated feature. I'm fascinated by the digital artists and developers
              who create complex works of art with just CSS and HTML. I wanted to do more than just move some circles around. 
              I finally came across an octopus idea on CodePen and Hubert was born. Finding tutorials and examples of what I want to create is easy.
              The challenge for me is in learning the individual elements so I understand what's happening and why. Then I can make it my own.
              Hubert is a softer, fancier octopus than his inspiration. His arms were challenging. Because one of his arms is just a drop shadow,
              I couldn't figure out how to apply an image background. So, I changed my design to alternate his arm appearance. That took some trial and error with my CSS."
              link='http://localhost:3000/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

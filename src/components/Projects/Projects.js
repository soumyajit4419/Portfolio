import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.jpeg';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Portfolio <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are some of my recent personal and professional projects.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Google Analytics Analysis'
              description='Established the amount of work a client has to do to encode GA and Google Tag Manager 
              into their site by performing network analasis, following variables from minified JavaScript, and establishing the purpose of all cookies. This project offered opportunity to become more intimately acquainted with Dev Tools and JS.'
              link='https://github.com/soumyajit4419/Chatify'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Sweet Accessibility'
              description="Worked to bring a frozen dessert company's WordPress website into WCAG compliance by 
              tagging images and providing next steps for the project hand-off. This project was a good refresher in FTP, and a nice introduction to PHP."
              link='https://github.com/soumyajit4419/Bits-0f-C0de'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Glowing Simplification'
              description="Currently, I'm simplifying an over-developed 
              WordPress site and creating a custom theme. Through this project I've become more familar with
              SASS, WP-Bakery, and WP theme development. It has also been my first exposure to using Docker
              as a staging environment"
              link='https://github.com/soumyajit4419/Editor.io'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='Level-Up-Portfolio'
              description="This website has been an adventure in React.js, Bootstrap, breaking things, and using Google. 
              I absolutely forked someone else's GitHub and used Node.js to install the foundation. I learn best by taking things apart
              and putting them back together again.   "
              link='https://github.com/soumyajit4419/Plant_AI'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title='Hubert Octopus'
              description="When I started working on this portfolio site, I knew I wanted an animated feature. I'm fascinated by the digital artists and developers
              who create complex works of art with just CSS and HTML. I wanted to do more than just move some circles around. 
              I finally came across an octopus idea on CodePen and Hubert was born. Finding tutorials and examples of what I want to create is easy.
              The challenge for me is in learning the individual elements so I understand what's happening and why. Then I can make it my own.
              Hubert is a softer, fancier octopus than his inspiration. His arms were challenging. Because one of his arms is just a drop shadow,
              I couldn't figure out how to apply an image background. So, I changed my design to alternate his arm appearance. That took some trial and error with my CSS."
              link='https://github.com/soumyajit4419/AI_For_Social_Good'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='Face Recognition and Emotion Detection'
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link='https://github.com/soumyajit4419/Face_And_Emotion_Detection'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

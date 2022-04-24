import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
           Greetings! I am{' '}
            <span className='orange'>M Chastain Flournoy </span>
            from <span className='orange'> Richmond, Virginia.</span>
            <br />
            I'm a <span className='orange'>Level 1 Apprentice at <a href="https://maxxpotential.com/">MAXX Potential</a></span>. I strive to be a <span className='orange'>Full Stack Web Developer</span> and well-rounded technician.
            <br />
            <br />
            In addition to my work at MAXX, I'm passionate about:
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Mindfulness / Self-Care / Mental Health Awareness
            </li>
            <li className='about-activity'>
              <ImPointRight /> Learning / Growing / Sharing Knowledge
            </li>
            <li className='about-activity'>
              <ImPointRight /> Podcasting / Streaming / Community Building
            </li>
            <li className='about-activity'>
              <ImPointRight /> Advocacy / Activism / Accessibility
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "If you have knowledge, let others light their candle in it."{' '}
          </p>
          <footer className='blockquote-footer'>Margaret Fuller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
           Recently, I've been focused on my current project which involves 

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

          <p className='orange'>
            "If you have knowledge, let others light their candle in it."{' '}
          </p>
          <footer className='blockquote-footer' >Margaret Fuller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

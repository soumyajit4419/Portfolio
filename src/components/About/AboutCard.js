import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImBook } from 'react-icons/im';
import { ImHeart } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Here's where and how I'm spending my time challenging myself on my
            journey through development:
          </p>
          <ul>
            <li className='about-activity'>
              <ImBook /> Studying/Practice: ~ 1 hr after work daily using the
              <a
                href='https://www.themuse.com/advice/take-it-from-someone-who-hates-productivity-hacksthe-pomodoro-technique-actually-works#:~:text=What%20Is%20the%20Pomodoro%20Technique,are%20referred%20to%20as%20pomodoros.'
                class='orange'
              >
                {' '}
                Pomodoro Method
              </a>
            </li>
            <li className='about-activity'>
              <ImBook /> React.js & JavaScript Bootcamps completed. This website
              uses React and node
            </li>
            <li className='about-activity'>
              <ImBook /> Strengthened frontend foundations in HTML, CSS,
              JavaScript, PHP, Wordpress, and Chrome DevTools through
              professional projects
            </li>
            <li className='about-activity'>
              <ImBook /> Local backend development using WAMP & MySQL, building
              with React.js and React App through Node.js, and version control
              using GitHub
            </li>
          </ul>

          <br />
          <br />
          <p>
            In addition to growing my technology skillset, I'm passionate about:
          </p>
          <ul>
            <li className='about-activity'>
              <ImHeart /> Mindfulness / Self-Care / Mental Health Awareness
            </li>
            <li className='about-activity'>
              <ImHeart /> Learning / Growing / Sharing Knowledge
            </li>
            <li className='about-activity'>
              <ImHeart /> Writing / Podcasting / Streaming / Community Building
            </li>
            <li className='about-activity'>
              <ImHeart /> Advocacy / Activism / Accessibility
            </li>
          </ul>

          <p className='orange'>
            "If you have knowledge, let others light their candle in it."{' '}
          </p>
          <footer className='blockquote-footer'>Margaret Fuller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

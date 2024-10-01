import React from 'react'
import { Row } from 'react-bootstrap'
import socialIcons from '../../data/socialIcons.js'

function AlternativeContact() {
  return (
    <Row style={{ margin: '20px 0' }} data-testid="alternative-contact">
      {/* Component Title */}
      <h1 data-testid="alternative-contact-heading">OR</h1>
      <p data-testid="alternative-contact-description">
        Feel free to <span className="purple">connect </span>with me via:
      </p>

      {/* Social Media Icons */}
      <ul className="social-icons-container" data-testid="social-icons-list">
        {socialIcons.map((socialIcon, index) => (
          <li
            className="social-icons"
            key={index}
            style={{ margin: '5px 10px' }}
            data-testid={`social-icon-${index}`}
          >
            <a
              className="purple"
              href={socialIcon.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`social-link-${index}`}
            >
              {socialIcon.icon}
            </a>
          </li>
        ))}
      </ul>
    </Row>
  )
}

export default AlternativeContact

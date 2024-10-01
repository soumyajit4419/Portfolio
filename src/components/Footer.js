import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import socialIcons from '../data/socialIcons.js'
import '../styles/Footer.css'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <Container fluid className="footer" data-testid="footer-container">
      <Row>
        {/* Credit */}
        <Col md="4" className="footer-copywright" data-testid="footer-credit">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col>

        {/* Copyright */}
        <Col
          md="4"
          className="footer-copywright"
          data-testid="footer-copyright"
        >
          <h3>Copyright © {year} SB</h3>
        </Col>

        {/* Social Icons */}
        <Col md="4" className="footer-body" data-testid="footer-social-icons">
          <ul className="footer-icons">
            {socialIcons.map((socialIcon, index) => (
              <li
                className="social-icons"
                key={index}
                data-testid={`footer-social-icon-${index}`}
              >
                <a
                  href={socialIcon.link}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-link-${index}`}
                >
                  {socialIcon.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer

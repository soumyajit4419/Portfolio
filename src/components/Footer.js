import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  // Define an array of social links
  const socialLinks = [
    { href: "https://github.com/soumyajit4419", icon: <AiFillGithub /> },
    { href: "https://twitter.com/Soumyajit4419", icon: <AiOutlineTwitter /> },
    { href: "https://www.linkedin.com/in/soumyajit4419/", icon: <FaLinkedinIn /> },
    { href: "https://www.instagram.com/soumyajit4419", icon: <AiFillInstagram /> },
  ];

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link, index) => (
              <li key={index} className="social-icons">
                <a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

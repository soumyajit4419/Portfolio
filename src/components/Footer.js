import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Cyrel Digang</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/CyrelDigang"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cyrel-digang-990b5b2bb"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/cyrel.digang.27/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=digangc@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </li>            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

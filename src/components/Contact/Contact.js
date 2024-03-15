import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Particle from "../Particle";

function Contact () {
    return(
        <Container fluid  className="contact-section">
      <Particle />
      <Container>
        <bold>Thank you for  visiting my portfolio! If you have any questions or would like to collaborate on a project Feel Free to Connect with ME!</bold>
          <Row xs={1} md={3}></Row>
      <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">GITHUB:
              
                <a
                  href="https://github.com/yoshihiroyamada23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                  
                </a>
              </li>
              <li className="social-icons"> LINKEDIN: 
                <a
                  href="https://www.linkedin.com/in/yoshihiroyamada/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">EMAIL ME:
                <a
                  href="mailto:yoshihiro.yamada1995@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    )
}
export  default Contact;






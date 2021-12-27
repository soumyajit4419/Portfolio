import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import * as Constants from "../../Constants.js";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      
        <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={Constants.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Constants.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

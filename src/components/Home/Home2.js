import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={5} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="orange"> EXCITES </span> ME
            </h1>
            <p className="home-about-body">
             I'm passionate about web accessibility, functional design, 
             and what makes things "tick." I love that there is no singular way to
             create/solve/do when it comes to technology.  
              <br />
              <br />This site is an experiment using:
              <i>
                <b className="orange"> Node.js, React.js, HTML, JavaScript/JSX, and CSS.</b>
              </i>
              <br />
              <br />
              I'm learning
              <i>
                <b className="orange"> ARIA (Accessible Rich Internet Applications) Markup</b>
              </i> to improve my accessibility chops. This site is not fully accessible... yet. 
              <br />
              <br />
          
            </p>
          </Col>
          <Col md={1} className="myAnimation">
                      
              <div class="octopus" alt="animated octopus named Hubert">
                    <div class="leg-1"></div>
                    <div class="head-shape"></div>
                    <div class="octopus-head">
                    <div class="eyes"></div>
                    <div class="blush"></div>
                    <div class="mouth"></div>
                </div>
    </div>
                      </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
               <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/niansahc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                </li>
      
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mchastainflournoy/"
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

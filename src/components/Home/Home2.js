import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/self.jpg";
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Brief  <span className="blue"> SELF-INTRODUCTION </span> 
            </h1>
            <p className="home-about-body">
              Previously, I am a Machine Learning guy. My research interests include Natural Language processing, Data Mining and Muti-modal tasks.
              Now, I expand my area of knowledge to software development. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue"> C++, JAVA and Python. </b>
              </i>
              <br />
              <br />
              I am eager to build new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="blue">
                  Data Mining and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              I also enjoy development with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Django</b>
              </i>
              <br/>
              <br />
              I am always open-minded. If you are interested in researching or developing together with me, please DM me.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Djokovic0311"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jiahang-li-218811217/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bitmoji.png";
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
              Allow myself to introduce...{" "}
              <i>
                <b className="purple">myself</b>
              </i>
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Chicago-based</b> front end developer
              with a passion for creating dynamic, scalable, responsive and
              accessible web and mobile applications.
              <br />
              <br />
              Professionally, most of my time is spent building{" "}
              <b className="purple">React</b> and{" "}
              <b className="purple">React Native</b> applications in Typescript.
              I also like to build chatbots using{" "}
              <b className="purple">Dialogflow</b> or{" "}
              <b className="purple">Alexa.</b>
              <br />
              <br />I have extensive Cloud Platform experience with &nbsp;
              <b className="purple">GCP, Azure and AWS, </b> for which I am a
              certifed Solutions Architect.
              <br />
              <br />
              Outside of work, I'm an avid house music listener, pole vault
              coach, football fan, snowboarder, wannabe chef, and traveler.{" "}
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
            <h3 className="purple">Connect with me</h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cgorski28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/c_gorski28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cole-gorski-188172123/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/colegorski"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

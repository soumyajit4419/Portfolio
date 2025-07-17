import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I enjoy programming and solving problems — it's something I find truly fulfilling.
              <br />
              <br />
              I'm most confident in working with
              <i>
                <b className="purple"> Java and Python,</b>
              </i>
              &nbsp;and I also have experience using
              <i>
                <b className="purple"> HTML, CSS, JavaScript,</b>
              </i>
              &nbsp;and a bit of
              <i>
                <b className="purple"> PHP.</b>
              </i>
              <br />
              <br />
              I'm also good at
              <i>
                <b className="purple"> SQL, database management, and writing efficient queries,</b>
              </i>
              &nbsp;and I know how to manage code using
              <i>
                <b className="purple"> Git version control.</b>
              </i>
              <br />
              <br />
              I'm particularly interested in building
              <i>
                <b className="purple"> system-level tools</b>
              </i>
              &nbsp;and exploring
              <i>
                <b className="purple"> artificial intelligence applications.</b>
              </i>
              <br />
              <br />
              For more info about me, <a href="/about" className="purple"><b>click here.</b></a>
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CyrelDigang"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cyrel-digang-990b5b2bb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/cyrel.digang.27/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=digangc@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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

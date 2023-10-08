import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              All I knew when I was in high school is that I want to be a
              Software Engineer… 🤷‍♂️
              <br />
              <br />I breathe technogy and code, specifically
              <i>
                <b className="purple"> AI, Developer and Productivity Tools, Python and Javascript </b>
              </i>
              <br />
              <br />
              My aim is to build a company where employees can focus on &nbsp;
              <i>
                <b className="purple">Personal Health and Mental Wellness </b> and
                along with developing technology which is {" "}
                <b className="purple">
                  Sustainable and Makes Profit.
                </b>
              </i>
              <br />
              <br />
              My passion is
              with <b className="purple">Technology</b> and
              <i>
                <b className="purple">
                  {" "}
                  Running
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> Family</b>
              </i>
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
                  href="https://github.com/gurvinder-dhillon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/gurvinderd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gurvinderdhillon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gurvinderdhillon007"
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

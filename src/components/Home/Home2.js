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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I learned how to code during a full-stack coding bootcamp at UC Berkeley.
              <br />
              <br />
              I started out my career as an <i>
                <b className="purple"> Account Executive </b>
              </i> in high tech, where I learned I had a passion for
              <i>
                <b className="purple"> software. </b>
              </i>
              <br />
              <br />
              I attended UC Berkeley's coding bootcamp so that I could go
              <i>
                <b className="purple"> deeper </b>{" "}
              </i>into the technology industry, either as a{" "}
              <i>
                <b className="purple">
                  solutions engineer
                </b>
              </i>{" "}
              or
              <i>
                <b className="purple"> software engineer.</b>
              </i>
              <br />
              <br />
              I'm looking forward to
              <i>
                <b className="purple">
                  {" "}
                  building new things
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> helping new customers.</b>
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
                  href="https://github.com/t2na"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zachantunes/"
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

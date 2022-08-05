import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import config from "../../config/config.json";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple get-hacked"> INTRODUCE </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              I started programming during the Covid Pandemic in 2020.
              <br />
              <br />I am fluent in new like programming languages such as
              <i>
                <b className="purple">
                  {" "}
                  CSS, HTML, Javascript and Typescript.{" "}
                </b>
              </i>
              <br />
              <br /> My field of Interest's are building new &nbsp;
              <i>
                <b className="purple get-hacked">
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple get-hacked">
                  Backend Services, CLI Services
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple get-hacked">Node.js</b> and
              <i>
                <b className="purple get-hacked">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple get-hacked"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                height={237}
                width={217}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple get-hacked">connect </span>
              with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={"https://github.com/" + config.github_username}
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
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
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

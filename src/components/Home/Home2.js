import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/headshot.jpg";
import AboutCard from "./AboutCard";
import Tilt from "react-parallax-tilt";
import { IconContext } from "react-icons";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT <span className="blue"> ABOUT </span> MYSELF
            </h1>
            <AboutCard />
          </Col>
          <Col md={3} className="myAvatar">
            <Tilt>
              <img
              src={myImg}
              className="img-fluid"
              id="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="blue">CONNECT</span> WITH ME HERE</h1>
            <IconContext.Provider value={{ size: 30 }}>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/funksy"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/john-lukich/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

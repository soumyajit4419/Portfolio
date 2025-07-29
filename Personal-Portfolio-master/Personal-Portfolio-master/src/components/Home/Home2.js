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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I discovered my passion for programming and have been learning and growing ever since. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C#, Dotnet Framework, OOP, .Net MVC, Azure, Github, Bicep. </b>
              </i>
              <br />
              <br />
              My field of Interest's are working on new &nbsp;
              <i>
                <b className="purple">Web APIs and Web applications and Migrations </b> and
                also in areas related to{" "}
                <b className="purple">
                  CD/CI deployments.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Dotnet MVC nad Angular</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern TypeScript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Angular, TypeScript, Html, Css</b>
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
                  href="https://github.com/gellu-sumanjali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumanjali-gellu-1a2040244/"
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiTelegram } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
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
  I am passionate about designing, automating, and scaling cloud infrastructure to deliver reliable and efficient solutions.
  <br />
  <br />I specialize in
  <i>
    <b className="purple"> DevOps Engineering, Cloud Computing, and System Administration. </b>
  </i>
  <br />
  <br />
  My areas of expertise include
  <i>
    <b className="purple"> AWS, OpenStack, Linux, Terraform, Kubernetes, Docker, Jenkins, and Ansible. </b>
  </i>
  <br />
  <br />
  I enjoy building scalable infrastructure, automating workflows, and optimizing system performance.
  <br />
  <br />
  I am continuously improving my skills in
  <i>
    <b className="purple"> CI/CD pipelines, Cloud Security, Monitoring, and Performance Tuning </b>
  </i>
  to deliver robust and secure platforms.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ zIndex: 10 }}
              />
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
                  href="https://github.com/alielesawy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ zIndex: 10 }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alielesawy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ zIndex: 10 }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/alielesawy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ zIndex: 10 }}
                >
                  <SiTelegram />
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
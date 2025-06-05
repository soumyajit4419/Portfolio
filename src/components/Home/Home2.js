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
              I discovered my passion for data when I realized its power to uncover patterns,
              drive decision-making, and tell compelling stories.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Python, SQL, and R </b>
              </i>
              and experienced in using data science libraries and tools.
              <br />
              <br />
              My primary interests lie in
              <i>
                <b className="purple"> Machine Learning, Natural Language Processing (NLP), and Computer Vision</b>,
                along with applying advanced analytics to real-world business problems.
              </i>
              <br />
              <br />
              I have hands-on experience building intelligent systems with
              <b className="purple"> PyTorch, TensorFlow, and MLflow</b>, and deploying solutions using
              <i>
                <b className="purple"> Flask, Docker, and cloud platforms like Google Cloud</b>.
              </i>
              <br />
              <br />
              I also enjoy developing end-to-end data pipelines and dashboards using tools like
              <i>
                <b className="purple"> Power BI and Tableau</b>,
              </i>
              turning data into insights for stakeholders.
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
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
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
                  href="https://www.instagram.com/soumyajit4419"
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

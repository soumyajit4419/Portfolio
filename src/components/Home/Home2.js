import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image2.png";
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
              More <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
            I developed a strong passion for data engineering and 
            have accumulated significant knowledge over time. 
              <br />
              <br />I am proficient in languages such as
              <i>
                <b className="purple"> Python, SQL, Java, Php and R. </b>
              </i>
              <br />
              <br />
              My areas of interest include building ,  &nbsp;
              <i>
                <b className="purple">robust data pipelines, implementing ETL processes</b> and
                and working with{" "}
                <b className="purple">
            big data technologies.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my skills to developing data solutions using tools and frameworks like 
              <b className="purple">Apache Spark, Hadoop,</b> and
              <i>
                <b className="purple">
                  {" "}
                  cloud platforms such as AWS and Azure.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" style={{ width: "70%", height: "70%" }} />

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
                  href="https://github.com/selengetu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/selenge-tulga/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/selengetu"
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

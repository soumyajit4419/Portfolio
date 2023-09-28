import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo-modified.png";
import Tilt from "react-parallax-tilt";
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
              About <span className="purple"> Me </span> 
            </h1>
            <p className="home-about-body">
              I'm an aspiring quant. developer and high school student at Prosper High School
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Java, Python, HTML, and CSS </b>
              </i>
              <br />
              <br />
              My field of interest's are  &nbsp;
              <i>
                <b className="purple">Software Engineering </b> and
                also in areas related to the{" "}
                <b className="purple">
                  Stock Market
                </b>
              </i>
              <br />
              <br />
              <b className="purple">Mission Statement </b> <br/>
              My mission in Prosper Career Independent Study is to gain first hand experience and insights into the software industry, and possibly pursue an internship. Furthermore, I would like to advance my networking skills, communication, and presentation skills in the program. I will work with my mentor to research and create software-related projects, and hopefully develop a thorough understanding of the software engineering field. 
              <br />
              <br />
              <b className="purple">Career Forecast </b> <br/>
              Software engineering is one of, if not the fastest growing career today. The median salary is around $120,000, and the career typically has flexible hours. Software engineers typically have remote work, and therefore, are able to travel or live internationally. However, the career requires continuous learning and staying up-to-date with the latest technological developments. Most software engineering roles require a bachelor’s degree, however it’s entirely possible to self-study programming and land a job. Some software engineers will also pursue their master’s or bachelor’s for more specialized fields such as artificial intelligence or quantum computing. Furthermore, it’s essential that any programmer has proficiency in a coding language and certifications are a bonus such as AWS, Cloud Developer certifications, or CyberSecurity certifications. On top of that, software engineers have high job security due to increasing technological development and therefore higher demand. Additionally, nearly all industries from finance to healthcare require software engineers to maintain their data and services. Overall, software engineers contribute to the future of technology and create innovative solutions for the world.

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
                  href="https://github.com/Okuhama"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/ray-arcand-211b3a281"
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

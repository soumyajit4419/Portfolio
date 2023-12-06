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
            I am a user-centric developer with 1.8 years of combined internship experience in software engineering. I've contributed to projects for over 6 clients, including 
            <i>
              <b className="purple"> Google, DBS, OCBC and Singpass </b>
            </i> 
            , developing software that has reached over 
            <i>
              <b className="purple"> 20,000 users</b>
            </i> .
            <br />
            <br />
            Some examples include:<br />
            1. At HelloHolo, as a software engineer intern, I collaborated closely with the development team to deliver 
            <i>
              <b className="purple"> 2 mobile and 2 web applications </b>
            </i> 
            , enhancing the event experience for more than 
            <i>
              <b className="purple"> 15,000 </b>
            </i> 
            attendees by providing easy access to information.<br /><br />
            2. In partnership with Google and Dnata, I helped develop an automated news collection and sharing platform, reducing the time employees spend accessing valuable news by 
            <i>
              <b className="purple"> 70% </b>
            </i> 
            . I led a 6-person Agile team and was primarily responsible for designing the software system.<br /><br />
            3. I developed a Java-based Android application that fostered community interaction among residents, which won 
            <i>
              <b className="purple"> 3rd place in the Singtel X SUTD award </b>
            </i> 
            .
            <br /><br />
            I am passionate about opportunities to develop applications that can impact billions of users.
           
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
                  href="https://github.com/jsonggan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chin-song/"
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

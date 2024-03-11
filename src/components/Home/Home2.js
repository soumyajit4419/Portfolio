import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
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
            So, I've fallen head over heels for programming. I mean, who wouldn't? It's like solving puzzles all day while pretending to be a wizard. 🧙‍♂️ Now, do I actually know what I'm doing? Well, let's just say my code sometimes looks like a Picasso painting... abstract, to say the least. But hey, isn't that how masterpieces are made? 💻😅 So here's to stumbling through syntax errors and pretending I'm a coding genius! 🥂 #ProgrammerLife
              <br />
              <br />My name is
              <i>
                <b className="purple"> Yoshihiro Yamada from San Diego, California. </b>
              </i>
              <br />
              <br />
              I am fluent in 
              <i>
                <b className="purple"> React and Ruby.</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products.</b>
                
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing frontend and backend products
              with <b className="purple">React and Ruby</b> with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks and Ruby framework
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Rails.</b>
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
            <h1>CONNECT WITH ME</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yoshihiroyamada23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yoshihiroyamada/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yoshihiro.yamada1995@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
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

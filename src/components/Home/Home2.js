import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/divyansh.jpeg";
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
             I am Divyansh Goel, a Software Engineer.
              <br />
              <br />I absolutely love solving ambiguos problems and can connect unrelated concepts to create robust solutions.
              {/* <i>
                <b className="black"> C++, Javascript and Python. </b>
              </i> */}
              <br />
              <br />
              My areas of interes:  &nbsp;
              <ul>
                {/* <i> */}
                  <li>
                    <b className="black">
                      Computer Vision 
                    </b> 
                  </ li>
                  <li>
                    <b className="black">
                      Natural Language Processing
                    </b>
                  </li>
                  <li>
                    <b className="black">
                      Building Scalable Backends
                    </b>
                  </li>
                  <li>
                    <b className="black">
                      Combining all the above and solving the toughest business and product problems.
                    </b>
                  </li>
                  <li>
                    <b className="black">
                      Football
                    </b>
                  </li>
                {/* </i> */}
              </ ul>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="black">Node.js</b> and
              <i>
                <b className="black">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="black"> React.js and Next.js</b>
              </i> */}
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
              Feel free to <span className="black">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Wolfgang9999"
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
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divyansh-goel-a0a433166/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
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

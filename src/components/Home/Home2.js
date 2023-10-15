import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { data } from "../../Constants";

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
              {data.bio}
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
              {data.socialMedia.map((link, index) => {
                return (
                  <li className="social-icons" key={index}>
                    <a href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="home-social-icons icon-colour">
                      {link.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

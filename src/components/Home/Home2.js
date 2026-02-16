import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I am an English teacher. I’m passionate about education, 
              technology, and personal growth. I enjoy learning new skills,
               sharing knowledge, and working on meaningful projects. 
               This website showcases my work, interests, and experiences. 
               Feel free to explore and connect.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, and JavaScript{" "}
                </b>
              </i>
              — and I enjoy learning new technologies.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Website, Solution Programs,{" "}
                </b>
              </i>
              and exploring new ways to  make life easier.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple"></b> {" "}
                <b className="purple"></b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

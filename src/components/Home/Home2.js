import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-1.png";
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
          <h1 style={{ fontSize: "2.6em" }}>
            About me
          </h1>
          <p className="home-about-body">
            I fell in love with programming while working as a project manager for a tech company. I am fluent in Rails and Javascript.
            My field of Interest's are building new &nbsp; Web Technologies, Products, and Website and App development.
            Whenever possible, I also expand my passion for developing products with Modern Javascript Library and Frameworks
            &nbsp; like React.js
          </p>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

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
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <h1 style={{ fontSize: "2.6em" }}>
            About me
          </h1>
          <Col md={10} className="home-about-body">
              During my tenure as a project manager at a tech company, I discovered my profound passion for programming. This love stemmed from my exposure to various projects and technologies. I have acquired fluency in both Rails and Javascript, allowing me to effectively navigate these programming languages. Continuously expanding my skills and knowledge in these areas is a priority for me, as I strive to stay abreast of the latest trends and best practices in the world of programming.
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Titre from "../Common/Titre";
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
            <strong className="home-text" style={{ textAlign: "center" }}>
              <Titre style={{ fontSize: "2.6em" }}>Situation actuelle </Titre>
            </strong>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">

            <p className="home-about-body">
              Récemment diplômé d'un <b className="home-text">BUT Informatique</b>,
              je suis à la recherche d'une opportunité professionnelle en tant que
              <b className="home-text"> développeur web</b>.
              <br />
              <br />Mes compétences principales sont axées sur
              <i>
                <b className="home-text"> PHP, Symfony et JavaScript </b>.
              </i>
              <br />
              <br />
              Toutefois, je reste toujours curieux et motivé à l'idée d'apprendre de
              <b className="home-text"> nouvelles technologies</b> !
            </p>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;

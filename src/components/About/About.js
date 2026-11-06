
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
//import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import meImg from "../../Assets/avatar.jpeg";


function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
        <Row style={{ justifyContent: "center", alignItems: "flex-start", padding: "10px" }}>            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                CONOCE <strong className="purple">MI PERFIL</strong>
              </h1>
              <Aboutcard />
            </Col>

            <Col
              md={5}
              className="about-img"
            >
              <img
                src={meImg}
                alt="Ilustración personal"
                className="img-fluid about-profile-img"
              />
            </Col>
          </Row>

          <h1 className="project-heading">
            <strong className="purple">Habilidades</strong> técnicas
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Herramientas</strong> y tecnologías
          </h1>

          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;

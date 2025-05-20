import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import About2 from "./About2";
import Titre from "../Common/Titre";
import photo from "../../Assets/photo.JPG";

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
        <Container >

          <Row style={{ justifyContent: "center" }}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" , textAlign: "center" }}>
              <Titre>À propos de <strong className="purple">moi </strong></Titre>
            </h1>
            <Col
              md={8}
              xs={12}
              order={{ xs: 1, md: 2 }}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <Aboutcard />
            </Col>
            <Col
              md={4}
              xs={12}
              order={{ xs: 2, md: 1 }}
              className="about-img"
              style={{ textAlign: "center", marginBottom: 20 }}
            >
              <img
                src={photo}
                alt="about"
                className="photo"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <About2 />
    </section>
  );
}

export default About;

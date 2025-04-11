import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import About2 from "./About2";

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
        <Container >

          <Row style={{ justifyContent: "center" }}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              À propos de <strong className="purple">moi </strong>
            </h1>
            <Col md={4} className="about-img">
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </Col>
            <Col
              md={8}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              
              }}
            >
              
              <Aboutcard />
            </Col>
           
          </Row>
        
        </Container>
      </Container>

      <About2 />
    </section>
  );
}

export default About;

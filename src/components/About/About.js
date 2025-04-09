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
          <div className="about-header">

          <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
            À propos de <strong className="purple">moi </strong>
          </h1>

          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col>
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{ maxWidth: "500px", maxHeight: "500px" }}
              />
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              
              }}
            >
              
              <Aboutcard />
            </Col>
           
          </Row>
          </div>
        
          
              
        </Container>
      </Container>

      <About2 />
    </section>
  );
}

export default About;

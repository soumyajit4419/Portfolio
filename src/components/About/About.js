import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Features from "./Features";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
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
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
              <h1 className="purple">
                  That's why we're building FindHer </h1>

              <h2> To make it easy for women to access information on workplaces
              of interest, enabling more <strong> informed decision making and honest feedback-sharing.
              </ strong></h2>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default About;

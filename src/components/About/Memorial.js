import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import covid from "../../Assets/covid.png";

function MemorialPage() {
  return (
    <Container fluid className="about-section">
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Homenaje a la  <strong className="purple">Resiliencia y el Sacrificio</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "90px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={covid} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          <strong className="purple">Explora</strong> las diferentes comunidades duronte la pandemia
        </h1>
        <br />
        <Toolstack />

       
      </Container>
    </Container>
  );
}

export default MemorialPage;

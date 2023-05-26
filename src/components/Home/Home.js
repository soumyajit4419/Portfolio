import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Techstack from "../About/Techstack";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">
              <h1 className="heading">
                Hello! My name is Andrea <br/>and I'm a <span>full-stack developer.</span>
              </h1>
            <Button
              variant="primary"
              href="/project"
              style={{ margin: "20px 50px" }}
            >
              {"Recent Projects"}
            </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="about-section" id="about">
        <Home2 />
      </Container>
      <Container fluid className="home-tech-section" id="skill">
        <Container>
          <Row>
            <Techstack />
          </Row>
        </Container>
        <Container fluid className="home-portfolio-section" id="portfolio">
          <Container>
            <Row>
              <Projects />
            </Row>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

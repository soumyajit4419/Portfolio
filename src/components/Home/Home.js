import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main-1.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Techstack from "../About/Techstack";
import Projects from "../Projects/Projects";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h3 className="heading">
                Hello! My name is Andrea and I'm a
              </h3>

              <h1 className="heading-name">
                Full Stack <br/>
                Developer<span className="purple">.</span>
              </h1>

            <Button
              variant="primary"
              href="/project"
              style={{ margin: "20px 50px" }}
            >
              {"Recent Projects"}
            </Button>

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
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

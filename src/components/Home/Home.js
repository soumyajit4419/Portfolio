import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                WELCOME!{" "}
                <span className="wave" role="img" aria-labelledby="octopus wave">
                🐙
                </span>
              </h1>

              <h2 className="heading-name">
                I'm
                <strong className="main-name"> M. Chastain Flournoy</strong>
                <p>and this is my playground.</p>
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
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
      <Home2 />
    </section>
  );
}

export default Home;

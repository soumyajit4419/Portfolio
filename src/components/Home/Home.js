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
          <Row className="align-items-center">
            <Col md={7} className="home-header" style={{ paddingBottom: 0 }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                WELCOME!{" "}
                <span className="wave" role="img" aria-label="Waving octopus emoji">
                🐙
                </span>
              </h1>

              <h2 className="heading-name">
                I'm
                <strong className="main-name"> M. Chastain Flournoy</strong>
              </h2>
              {/* used to live inside the h2 (invalid markup) — pulled out
                  but kept at the same size so the hero looks unchanged */}
              <p className="heading-name">and this is my playground.</p>

            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                 src={homeLogo}
                alt="Illustrated portrait of M. Chastain Flournoy"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <div style={{ paddingTop: "16px" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

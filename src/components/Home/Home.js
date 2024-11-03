import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";
import LogoMuertos from "../../Assets/logoDia.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                💀
                </span>
              </h1>

              <h1 className="heading-name">
                ALTAR DE
                <strong className="main-name"> MUERTOS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={LogoMuertos}
                alt="home pic"
                className="wave"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
      
    </section>
  );
}

export default Home;

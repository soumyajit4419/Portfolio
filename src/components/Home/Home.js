import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/headshot.jpg";
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
                Hi there, and welcome to my portfolio!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JOHN LUKICH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: 20 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div id="storyset">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
                <Link id="attribution"
                  to="https://storyset.com/web"
                  // target="_blank"
                  // rel="license">
                  >
                  Illustration by Storyset
                </Link>
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

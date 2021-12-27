import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/headshot.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import * as Constants from "../../Constants.js";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> {Constants.name_1}</strong>
              </h1>
              

              <div style={{ padding: 50, textAlign: "left" }}>
                <h4>
                  {Constants.description_1}<a href={Constants.ucalgary}>{Constants.description_2}</a>{Constants.description_3}
                </h4>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
             
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

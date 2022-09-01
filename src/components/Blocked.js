import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
function Blocked({ reason }) {
  return (
    <section >
      <Container fluid className="home-section" id="home" style={{ height: '100vh' }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading ">
                Hi There!{" "}
                <span
                  className="wave get-hacked"
                  role="img"
                  aria-labelledby="wave "
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name get-hacked">
                Your banned from this site! - <br />    
                <strong className="main-name get-hacked">Reason:  "{reason}"</strong>
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Blocked;

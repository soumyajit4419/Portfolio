import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

function Home2() {
  return (
      <Container className="home-about-section" >
        <Container className="home-about-body" >
          <Row className="justify-content-md-start">
            <Col md={4}>
              <Type />
            </Col>
            <Col md={8}>
              <h1>
                Job search wasn’t built with women in mind...</h1>
            </Col>

          </Row>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="home-about-body">
                Job postings have extremely limited information,
                with no good way to assess whether a workplace aligns with your requirements and values.
                Sometimes, you're left with more questions than answers!
              </h2>
            </Col>
            <Col md={4}>
              <Type />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;

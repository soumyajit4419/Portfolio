import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">

<Row>
          <Col md={7} >


          <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Job search wasn’t built with women in mind... </span>

            </h1>
          </Col>
              <Col md={5} >
                  <Type />
              </Col>
</Row>
        <Row>
        <Col md={8} >
            <h2 className="home-about-body">
              If you’re a woman, you probably have unique needs and experiences at work.  <br />
              But job postings have extremely limited information, with no good way to assess whether a workplace aligns with your requirements and values.
              <br />
            </h2>


            </Col>


          <Col md={4} >
          <Type />
      </Col>


</Row>


    </Container>

  );
}
export default Home2;

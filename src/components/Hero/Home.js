import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import Image from "/Users/anyueow/Desktop/FindHer-Landing-V2/src/Assets/hero.png";
import Button from "react-bootstrap/Button";
import Home2 from "./Home2";
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid id="home">
        <Container className="home-content">
          <Row>

              <h1 style={{ paddingBottom: 15 }} className="main-name">
                  <strong className="main-name">
                Insights on workplaces in India, for Women by Women

              </strong>
              </h1>

              <h3 className="heading-name">Learn what it’s like to work at a company from the women who have been there...
              </h3>
          </Row>
            <Row>
                <Form className="email-form d-flex align-items-center justify-content-center">
                    <Form.Group controlId="formEmail" className="mb-0">
                        <Form.Control type="email" placeholder="Your Email Address" className="mr-2" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-lg">
                        Get Access
                    </Button>
                </Form>
            </Row>
            <Row>
                <img src={Image} alt="Image"/>

            </Row>

        </Container>
      </Container>
        <Home2 />

        <About />
    </section>

  );
}

export default Home;

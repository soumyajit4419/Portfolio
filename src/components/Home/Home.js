import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Home2 from "./Home2";
import { FaRegArrowAltCircleDown } from "react-icons/fa";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={12} className="text-center">
              <h1>
                <strong className='main-name'>SACHA DESQUESNES</strong>
                <br />
                <strong className='main-job'>Développeur web
                  <Typewriter
                    options={{
                      strings: [
                        " Full-Stack",
                        " Front-End",
                        " Back-End",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50
                    }}
                  />
                </strong>
              </h1>
              <br />
              <br />
              <div className="arrow-down">
                <FaRegArrowAltCircleDown />
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

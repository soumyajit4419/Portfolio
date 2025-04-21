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
                <Typewriter
                  options={{
                    strings: [
                      "<strong class='main-name'>SACHA<br />DESQUESNES</strong>",
                      "<strong class='main-job'>Développeur web Full-Stack</strong>",
                    ],
                    autoStart: true,
                    loop: true, 
                    delay: 75,
                    deleteSpeed: 50
                    
                  }}
                />
              </h1>
              <br />
              <br />
              <div style={{ fontSize: '50px' }}><FaRegArrowAltCircleDown /></div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

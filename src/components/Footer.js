import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/logo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section className="footer" id='footer'>
      <Container className="col-md ">
        <Row>
          <Col md="6" className="footer-copywright">
            <div style={{ width: "150px" }}> <img src={logo} className="img-fluid" alt="brand" style={{ width: 'auto', height: 'auto' }} /></div>
            <h2 className="Footerhed"> Envisioning an India where all women are engaged in fulfilling and financially rewarding work</h2>
            <h3 className="Footerhed">Copyright © {year} FindHer</h3>
          </Col>
          <Col md="6" className="Footerhed">
            <h2 className="Footerhed1"> <strong>
              Contact Us </strong></h2>

            <Row className="footer-icons footer-gap "
            // style={{ flexDirection: "column", gap: 4 }}
            >
              <Col xs={1}>
                <a href="https://www.linkedin.com/in/soumyajit4429/"
                  style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn style={{ width: '32px', height: '32px' }} />
                </a>
              </Col>
              <Col xs={1}>
                <a href="https://www.instagram.com/soumyajit4429"
                  style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram style={{ width: '32px', height: '32px' }} />
                </a>
              </Col>
              <Col xs={1}>
                <a href="https://www.instagram.com/soumyajit4419"
                  style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <AiFillMail style={{ width: '32px', height: '32px' }} />
                </a>
              </Col>
              {/* Add more social icons here if needed */}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;

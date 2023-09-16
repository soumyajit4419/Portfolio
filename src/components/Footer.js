import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { data } from '../Constants'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by {data.name}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          {data.socialMedia.map((link, index) => {
                return (
                  <li className="social-icons" key={index}>
                    <a href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white"}}>
                      {link.icon}
                    </a>
                  </li>
                );
              })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

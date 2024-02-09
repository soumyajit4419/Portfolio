import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="15" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/titi0267"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCi1e5bE8wpxKh87O0l4gExA"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://my.linkedin.com/in/timoth%C3%A9-coniel-b57341203"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/timothe_coniel/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={25} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

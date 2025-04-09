import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact">
      <Container fluid className="contact-section">
        <Container>
          <h1 className="contact-heading">
            Contact
          </h1>
            <p className="contact-description">
                N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.
            </p>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Row>
              {/* Colonne gauche : Nom et Email */}
              <Col md={6} className="contact-form">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>
                    <IoMdPerson /> Nom et prénom
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Votre nom et prénom"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>
                    <MdOutlineAlternateEmail /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    required
                  />
                </Form.Group>
              </Col>

              {/* Colonne droite : Message */}
              <Col md={6} className="contact-form">
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>
                    <MdOutlineMessage /> Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Votre message"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Envoyer
                </Button>
              </Col>
            </Row>
          </Form>
          {success && (
            <Alert variant="success" className="mt-3">
              Message envoyé avec succès !
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="mt-3">
              Une erreur est survenue. Veuillez réessayer.
            </Alert>
          )}

          <hr style={{ margin: "20px", color: "#BFCDE0", borderWidth: "3px" }} />

          <Row>
            <Col md={6} className="contact-info">
              <h3>Informations de contact</h3>
              <p>
                Email : <strong>sacha.desquesnes@gmail.com</strong>
              </p>
              <p>
                Téléphone : <strong>+33 7 82 42 80 11</strong>
              </p>
              <p>
                Localisation : <strong>Caen, France</strong>
              </p>
            </Col>
            <Col md={6} className="contact-info">
            <h3>Retrouvez moi sur :</h3>
            <ul className="footer-icons">
                <li className="social-icons">
                    <a href="https://www.linkedin.com/in/sacha-desquesnes/"
                        style={{ color: "white" }}
                        target="_blank" 
                        rel="noreferrer"
                        className="icon-colour  home-social-icons">
                        <FaLinkedinIn />
                    </a>
                </li>         
            </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Remplacez par votre Service ID EmailJS
        "YOUR_TEMPLATE_ID", // Remplacez par votre Template ID EmailJS
        formRef.current,
        "YOUR_PUBLIC_KEY" // Remplacez par votre clé publique EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
          formRef.current.reset(); // Réinitialise le formulaire
        },
        (error) => {
          console.log(error.text);
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
            <strong className="purple">Contactez-moi</strong>
          </h1>
          <Row>
            <Col md={6} className="contact-form">
              <Form ref={formRef} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Votre nom"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Votre email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Votre message"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Envoyer
                </Button>
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
            </Col>
            <Col md={6} className="contact-info">
              <h3>Informations de contact</h3>
              <p>Email : <strong>sacha.desquesnes@example.com</strong></p>
              <p>Téléphone : <strong>+33 6 12 34 56 78</strong></p>
              <p>Localisation : <strong>Caen, France</strong></p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
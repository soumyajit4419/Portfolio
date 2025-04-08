import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlineMessage } from "react-icons/md";


function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tzf2ef", // Remplacez par votre Service ID EmailJS
        "template_wqld613", // Remplacez par votre Template ID EmailJS
        formRef.current,
        "6ZIhlYo8H8PheTEIr" // Remplacez par votre clé publique EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
          formRef.current.reset(); 
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
            Contactez-<strong className="purple">moi</strong>
          </h1>
          <Row>
            <Col md={6} className="contact-form">
              <Form ref={formRef} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label ><IoMdPerson /> Nom et prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Votre nom et prénom"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label><MdOutlineAlternateEmail /> Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    required
                  />
                </Form.Group>
              </Form>
            </Col>

            <Col md={6} className="contact-form">
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label><MdOutlineMessage /> Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Votre message"
                  required
                />
              </Form.Group>
              
            </Col>
            
            <Button variant="primary" type="submit">
                Envoyer
              </Button>
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
          </Row>

          <hr style={{ margin: '20px', color: '#BFCDE0', borderWidth: '3px' }} />

         
          <Row>
            <span md={6} className="contact-info">
              <h3>Informations de contact</h3>
              <p>Email : <strong>sacha.desquesnes@gmail.com</strong></p>
              <p>Téléphone : <strong>+33 7 82 42 80 11</strong></p>
              <p>Localisation : <strong>Caen, France</strong></p>
            </span>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
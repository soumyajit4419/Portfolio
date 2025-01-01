import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactCard(props) {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;

    // Replace this with your backend logic or email service
    alert(`Message sent! Email: ${email}, Message: ${message}`);
    
    // Clear the form
    setFormData({ email: "", message: "" });
  };

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>
          <strong className="purple">{props.title}</strong>
        </Card.Title>
        <Card.Subtitle className="mb-2">
          <strong>{props.email}</strong>
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;

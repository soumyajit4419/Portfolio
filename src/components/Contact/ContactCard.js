import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"; // Import axios for API calls

function ContactCard(props) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Track form submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      setStatus("Sending...");
      const response = await axios.post("http://localhost:5000/send", { name, email, message });
      if (response.data.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    }
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
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
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
          <p style={{ color: "white" }}>
              In the meantime, feel free to reach out to me on{" "}
              <a
                href="https://linkedin.com/in/hafeefasultan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="purple"
              >
                LinkedIn
              </a>
              !
            </p>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
          {status && <p style={{ marginTop: "10px", color: "white" }}>{status}</p>}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;

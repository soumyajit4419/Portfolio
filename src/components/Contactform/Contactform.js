import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import laptopImg from "../../Assets/contanct.png";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const serviceID = 'service_asci8xk';
    const templateID = 'template_6rkyggt';
    const userID = 'sEmhP7B7rXg15J2Zj';

    emailjs.send(serviceID, templateID, values, userID)
      .then((response) => {
        alert('Message sent successfully!');
        setSubmitting(false);
        resetForm();
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        setSubmitting(false);
      });
  };

  return (
    <Container fluid className="contact-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "#ffffff" }}>
            Get in <strong className="purple">Touch</strong>
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row>
                  <Col md={6}>
                    <label htmlFor="name" style={{ color: "#ffffff" }}>Name</label>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="email" style={{ color: "#ffffff" }}>Email</label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <label htmlFor="message" style={{ color: "#ffffff" }}>Message</label>
                    <Field name="message" as="textarea" className="form-control" />
                    <ErrorMessage name="message" component="div" className="error-message" />
                  </Col>
                </Row>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="contact-img"
        >
          <img src={laptopImg} alt="contact" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
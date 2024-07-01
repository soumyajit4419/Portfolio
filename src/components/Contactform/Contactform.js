import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
import "./Contactform.css"; // Assuming you have some styles for the form

const ContactForm = () => {
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
    <Container className="contact-form-container">
      <h2>Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field name="message" as="textarea" className="form-control" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;

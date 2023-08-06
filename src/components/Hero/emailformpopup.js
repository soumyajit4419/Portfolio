import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function EmailFormPopup() {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email is ${email}`);
        // Add any further logic for handling the email submission here
        handleClose();
    };

    return (
        <div>
            <button className="sign-up-btn" onClick={handleShow}>
                Sign up today!</button>


            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default EmailFormPopup;

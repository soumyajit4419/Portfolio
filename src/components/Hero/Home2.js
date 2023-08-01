import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "./homestyle.css"; // Import the custom CSS file here

function Home2() {
    return (
        <Container className="home-about-section" id="about">
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h1 className="purple title">
                        Job search wasn’t built with women in mind...
                    </h1>
                </Col>
                <Col md={4}>
                    <Type />
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h2 className="home-about-body">
                        If you’re a woman, you probably have unique needs and experiences at work.
                        But job postings have extremely limited information, with no good way to assess whether a workplace aligns with your requirements and values.
                    </h2>
                </Col>
                <Col md={4}>
                    <Type />
                </Col>
            </Row>
        </Container>
    );
}

export default Home2;

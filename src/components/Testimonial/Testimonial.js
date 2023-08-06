import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {Col, Container, Row} from "react-bootstrap";
import image from "./Illustration - composition 2.png";

const testimonials = [
    {
        name: "John Doe",
        company: "Company A",
        message: "Testimonial 1 message goes here...",
        image: image,
    },
    {
        name: "Jane Smith",
        company: "Company B",
        message: "Testimonial 2 message goes here...",
        image: image,
    },
    // Add more testimonials as needed
];

function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const testimonial = testimonials[currentIndex];


    return (
        <section>
            <Container fluid id="testimonial" className="full-height center-contents">
                <Container className="home-content-testi">

                    <div className="margin2">
                    <h1 className="main-name"><strong>What
                        they have to say about Find<span className="text-wrapper-2">
                            Her</span>...</strong></h1> </div>
                    <Container className="testimonial">
                    <Row className="space space align-items-center">
                        <Col md={1}>
                            <button className="arrow-button" onClick={handlePrev}>
                                <AiOutlineLeft className="opalescent-arrow" />
                            </button>
                        </Col>
                        <Col md={4} className="text-left"> {/* Align text to the left */}


                            <img src={testimonial.image} alt={testimonial.name} className="testi-img"/>

                        </Col>

                        <Col md={6} >

                            <h1 className="header">{testimonial.name}</h1>
                            <h2 className="subhead">{testimonial.company}</h2>
                            <p className="cardSub">{testimonial.message}</p>

                        </Col>
                        <Col md={1}>
                            <button className="arrow-button" onClick={handleNext}>
                                <AiOutlineRight className="opalescent-arrow" />
                            </button>
                        </Col>

                    </Row>

                    </Container>
                </Container>
            </Container>
            {/* You may include other sections/components below */}
        </section>
    );
}

export default TestimonialSection;

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import base from "./Images/Untitled design-18.png";
import ImgOne from "./Images/4.png";
import ImgTwo from "./Images/5.png";
import ImgThree from "./Images/Untitled design-17 1.png";

function sectTwo() {
    return (
        <section>
            <Container fluid id="home" className="full-height center-contents">
                <Container className="home-content">
                    <Row className="imgs-base2">
                        <Col md={4} className="text-left"> {/* Align text to the left */}
                            <div className="margin"><h1 className="main-name">
                                <strong>That's why we're building Find
                                    <span className="text-wrapper-2">Her! </span>
                                </strong>
                            </h1> </div>
                            <h3 className="Sub">
                                We make it easy for women to access
                                information on workplaces of interest, enabling more
                                <span> informed decision-making </span>
                                and <span> honest feedback-sharing.</span>
                            </h3>


                        </Col>

                        <Col md={8} >
                            <img src={base} className="base2"/>
                            <img src={ImgOne} className="hoverOne2"/>
                            <img src={ImgTwo} className="hoverTwo2"/>
                            <img src={ImgThree} className="hoverThree2"/>
                        </Col>

                    </Row>
                </Container>
            </Container>
            {/* You may include other sections/components below */}
        </section>
    );
}

export default sectTwo;

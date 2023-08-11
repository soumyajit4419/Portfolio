import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import base from "./Images/Untitled design-18.png";
import ImgOne from "./Images/search.png";
import ImgTwo from "./Images/5.png";
import ImgThree from "./Images/Untitled design-17 1.png";
import mobileimage from "./Images/1.png";


function sectTwo() {
    return (
        <section className="grid-section sectionTwoContainer" >

            <Container className="container-md">
                <Row className="grid-subsection">
                    {/* Part 1: Content */}
                    <Col md={4} className="section-container" >
                        <h1 className="section-content">
                            <strong>That's why we're building Find
                                <span className="text-wrapper-2">Her! </span>
                            </strong>
                        </h1>
                        <h3 className="Sub">
                            We make it easy for women to access
                            information on workplaces of interest, enabling more
                            <span className="underline"> informed decision-making </span>
                            and <span className="underline"> honest feedback-sharing.</span>
                        </h3>
                    </Col>
                    {/* Part 2: Image */}
                    <Col md={8}>
                        <div className="inCustomed desktopHeroImage" style={{ position: "absolute", right: "0" }}>
                            <img alt="mobile" src={base} className="base2"
                                style={{ maxWidth: "100%", width: "100%", height: "100%", objectFit: "contain" }}
                            />
                            <img alt="chat1" src={ImgOne} className="hoverOne2" />
                            <img alt="chat2" src={ImgTwo} className="hoverTwo2" />
                            <img alt="chat3" src={ImgThree} className="hoverThree2" />
                        </div>
                        <div className="mobileHeroImage">
                            <img src={mobileimage} alt="chat-image" width={'100%'} height={'auto'} />
                        </div>

                    </Col>
                </Row>
            </Container>

        </section >
    );
}

export default sectTwo;

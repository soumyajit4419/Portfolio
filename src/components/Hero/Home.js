import React, { useState } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";
import ImgOne from "./Images/Group 125.png";
import ImgThree from "./Images/Untitled design-13 1.png";
import ImgTwo from "./Images/reviews 3d 1.png";
import base from "./Images/base.png";
import mobileBase from "./Images/mobileBase.svg";
import EmailFormPopup from "./emailformpopup"; // Import the EmailFormPopup component

function Home() {
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email is ${email}`);
    };

    return (
        <section className="hero-banner grid-section" id="home">
            <Container className="container-md">
                <div className="home-content">
                    <Row >
                        <Col md={8} xs={12} className="text-left mt-5">

                            <h1 className="main-name">
                                <strong>
                                    Insights on workplaces in <span className="text-deco">
                                        India</span>,
                                    <span className="span"> for </span>
                                    <span className="text-wrapper">women </span>
                                    <span className="span">by</span>
                                    <span className="text-wrapper-2"> women. </span>
                                </strong>
                            </h1>

                            <h3 className="heading-name">
                                Learn what it’s like to work at a company from the
                                women who have been there.
                            </h3>

                            {/* Show the email form popup when the button is clicked */}
                            <EmailFormPopup />

                        </Col>

                        <Col md={4} xs={12} className="mobileImageMb">
                            <div className="desktopHeroImage">
                                <img src={base} className="base" />
                                <img src={ImgOne} className="hoverOne" />
                                <img src={ImgTwo} className="hoverTwo" />
                                <img src={ImgThree} className="hoverThree" />
                            </div>

                            <div className="mobileHeroImage">
                                <img src={mobileBase} className="mobileBase" />
                            </div>
                        </Col>
                    </Row>

                </div >

            </Container >
            {/* You may include other sections/components below */}
        </section >
    );
}

export default Home;

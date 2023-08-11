import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../Assets/wholepic.png";
import image2 from "../../Assets/insights.png";
import image3 from "../../Assets/relevant.png";
import image4 from "../../Assets/exclaim.png"

function SectionThree() {
    const [isVisible, setIsVisible] = useState(false);
    const [vis, setVis] = useState(false)
    const [value, setValue] = useState(false)
    const [showButton1, setShowButton1] = useState(true);
    const [showButton2, setShowButton2] = useState(true);
    const [showButton3, setShowButton3] = useState(true);
    function toggleCard() {
        setIsVisible(!isVisible);
        setShowButton1(false);
        setValue(false)
        setVis(false)
        setShowButton2(true);
        setShowButton3(true);
    };
    const toggleCard2 = () => {
        setVis(!vis);
        setIsVisible(false);
        setShowButton2(false);
        setShowButton1(true);
        setShowButton3(true);
    };
    const toggleCard3 = () => {
        setValue(!value);
        setIsVisible(false);
        setShowButton3(false);
        setVis(false)
        setShowButton2(true);
        setShowButton1(true);
    };

    return (
        <section className="grid-section shade">
            <Container className="container-md">
                <h1 className="main-name-sect mb-40">
                    <strong>
                        On Find
                        <span className="text-wrapper">Her </span>
                        you can get:
                    </strong></h1>
                <p className="section-description">Click below to  learn more about each feature. </p>
                <Row className="grid-subsection card-section btn-section">
                    <Col xs={12} md={4} className="tech-icons">

                        <h2 className="card-head"> the whole picture </h2>
                        <div className="image-container">
                            <img src={image1} className="img-card" />  </div>
                        <h3 className="cardSub"> comprehensive overviews
                            of individual offices</h3>
                    </Col>
                    <Col xs={12} md={4} className="tech-icons">

                        <h2 className="card-head"> <span className="text-deco1">exclusive</span> insights </h2>
                        <div className="image-container">
                            <img src={image2} className="img-card" />  </div>
                        <h3 className="cardSub">real, transparent reviews from  women who have worked there</h3>
                    </Col>
                    <Col xs={12} md={4} className="tech-icons">

                        <h2 className="card-head"> relevant to you <span><img src={image4} alt="exclaimtory" /></span></h2>
                        <div className="image-container">
                            <img src={image3} className="img-card" />  </div>
                        <h3 className="cardSub"> Detailed  information on factors important to you </h3>
                    </Col>
                </Row>
                <Row className="btn-section1">
                    {
                        showButton1 && (
                            <Col>
                                <button className="card-btn" onClick={toggleCard}><span className="card-btn-head">The Whole Picture</span></button>
                            </Col>)}
                    {isVisible && (<div xs={12} md={4} className="tech-icons">
                        <h2 className="card-head"> the whole picture </h2>
                        <div className="image-container">
                            <img src={image1} className="img-card" />  </div>
                        <h3 className="cardSub"> comprehensive overviews
                            of individual offices</h3>
                    </div>)}
                    {
                        showButton2 && (<Col>
                            <button className="card-btn" onClick={toggleCard2}><span className="card-btn-head">Exclusive Insights</span></button>
                        </Col>)}
                    {vis && (<div xs={12} md={4} className="tech-icons">
                        <h2 className="card-head"> exclusive insights </h2>
                        <div className="image-container">
                            <img src={image2} className="img-card" />  </div>
                        <h3 className="cardSub">real, transparent reviews from  women who have worked there</h3>
                    </div>)}
                    {
                        showButton3 && (
                            <Col>
                                <button className="card-btn" onClick={toggleCard3}><spa className="card-btn-head">Tailored for You</spa></button>
                            </Col>)}
                    {value && (<div xs={12} md={4} className="tech-icons">
                        <h2 className="card-head"> relevant to you </h2>
                        <div className="image-container">
                            <img src={image3} className="img-card" />  </div>
                        <h3 className="cardSub"> Detailed  information on factors important to you </h3>
                    </div>)}
                </Row>
            </Container>
        </section>


    );
}

export default SectionThree;

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import image1 from "../../Assets/wholepic.png";
import image2 from "../../Assets/insights.png";
import image3 from "../../Assets/relevant.png";


function SectionThree() {
    return (

        <section>

            <Container className="shade2 full-height center-contents" fluid id="about">

                <Container className="home-content-about">


                    <div className="space">
                    <h1 className="main-name-sect">
                        <strong>
                            On Find
                            <span className="text-wrapper">Her </span>
                            you can get:
                        </strong></h1>

                    </div>
                    <Row>

                        <Col className="tech-icons">
                            <div className="space">
                            <h2 className="card-head"> The Whole Picture </h2>
                            <img src={image1} className="img-card" />
                                <h3 className="cardSub"> Comprehensive <strong> overviews </strong> of individual offices </h3>
                            </div>

                        </Col>
                        <Col  className="tech-icons">
                            <h2 className="card-head"> Exclusive Insights </h2>
                            <img src={image2}  src={image2} className="img-card2"/>

                            <h3 className="cardSub"> Real <strong> transparent reviews
                            </strong> from women who have worked there </h3>

                        </Col>
                        <Col  className="tech-icons">
                            <h2 className="card-head"> Relevant to <strong> You </strong></h2>
                            <img src={image3} className="img-card"/>
                            <h3 className="cardSub"> <strong> Detailed </strong> information on factors important to you </h3>

                        </Col>
                    </Row>




                </Container>
            </Container>


        </section>


    );
}

export default SectionThree;

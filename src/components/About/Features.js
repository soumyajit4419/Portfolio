import React from "react";
import { Col, Row } from "react-bootstrap";
import image1 from "../../Assets/wholepic.png";
import image2 from "../../Assets/insights.png";
import image3 from "../../Assets/relevant.png";

function Features() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1> On FindHer:
      </h1>
      <Col xs={4} md={3} className="tech-icons">
        <h2> The Whole Picture </h2>
        <img src={image1} classname="img-fluid" />
        <h3> comprehensive overviews of individual offices </h3>

      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <h2> Exclusive Insights </h2>
        <img src={image2} className="img-fluid" />
        <h3> real transparent reviews from women who have worked there </h3>

      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <h2> Relevant to <strong> You </strong></h2>
        <img src={image3} className="img-fluid" />
        <h3> detailed information on factors important to you </h3>

      </Col>
    </Row>
  );
}

export default Features;

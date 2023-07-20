import React from "react";
import { Col, Row } from "react-bootstrap";
import image1 from "/Users/anyueow/Desktop/FindHer-Landing-V2/src/Assets/wholepic.png";
import image2 from "/Users/anyueow/Desktop/FindHer-Landing-V2/src/Assets/insights.png";
import image3 from "/Users/anyueow/Desktop/FindHer-Landing-V2/src/Assets/relevant.png";

function Features() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1> On FindHer:
        </h1>
      <Col xs={4} md={2} className="tech-icons">
          <h2> The Whole Picture </h2>
          <img src={image1} classname = "img-fluid" />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <h2> Exclusive Insights </h2>
          <img src={image2} className="img-fluid"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <h2> Relevant to <strong> You </strong></h2>
          <img src={image3} className="img-fluid"/>
      </Col>
    </Row>
  );
}

export default Features;

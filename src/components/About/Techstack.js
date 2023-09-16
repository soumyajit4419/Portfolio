import React from "react";
import { Col, Row } from "react-bootstrap";
import { data } from "../../Constants";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {data.techStack.map((stack, index) => {
        return (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            {stack}
          </Col>
        )
      })}
    </Row>
  );
}

export default Techstack;

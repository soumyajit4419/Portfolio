import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
} from "react-icons/di";
import { 
  SiPandas, 
  SiNumpy, 
  SiPlotly,
  // SiSeaborn,
  // SiScikitLearn,
  // MatPLotLib,
  SiTensorflow,
  SiOpencv,
  SiOpenai,
} from "react-icons/si";

function DataScience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
    </Row>
  );
}

export default DataScience;

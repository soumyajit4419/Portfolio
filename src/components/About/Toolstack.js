import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const navigate = useNavigate();

  const handleCientificos = () => {
    navigate("/memorial/cientificos");
  };
  const handleMedicos = () => {
    navigate("/memorial/salud");
  };
  const handleVoluntarios = () => {
    navigate("/memorial/voluntarios");
  };
  const handlePacientes = () => {
    navigate("/memorial/pacientes");
  };
  const handlePlaneta= () => {
    navigate("/memorial/planeta");
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={handleCientificos}>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode onClick={handleMedicos}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman onClick={handleVoluntarios}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack onClick={handlePacientes}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel onClick={handlePlaneta}/>
      </Col>
    </Row>
  );
}

export default Toolstack;

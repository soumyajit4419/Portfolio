import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Github from "../Github";
import Techstack from "../Techstack";
import CardVoluntarios from "./CardVoluntarios";
import video from "../../../Assets/videos/voluntarios.mp4";

function TestimonioVoluntarios() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6} // Cambié de 7 a 6 para ajustar el ancho
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A los <strong className="purple">voluntarios</strong>: luz en tiempos de oscuridad
            </h1>
            <CardVoluntarios />
          </Col>
          <Col
            md={6} // Cambié de 5 a 6 para ajustar el ancho
            style={{ paddingTop: "30px", paddingBottom: "50px" }} // Ajusté el padding para que coincida con el texto
            className="about-img"
          >
            <video
              className="img-fluid"
              autoPlay
              loop
              muted
              controls
              style={{ width: "100%", height: "auto" }} // Ajusté el estilo para llenar el espacio
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TestimonioVoluntarios;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SOBRE <span className="purple"> MÍ </span>
            </h1>

            <p className="home-about-body">
              Soy <b className="purple">Licenciado en Astronomía</b> de la
              Pontificia Universidad Católica de Chile. Mi formación
              académica me ha permitido desarrollar una sólida base en
              matemáticas, programación y análisis estadístico, áreas que
              han despertado mi especial interés por la{" "}
              <b className="purple">Ciencia de Datos</b>.
              <br />
              <br />
              Durante mi experiencia como asistente de investigación,
              trabajé en el análisis de datos espectroscópicos de 14 galaxias
              en fusión, desarrollando{" "}
              <b className="purple">pipelines en Python</b> para procesar
              observaciones del instrumento VLT/MUSE. Mediante modelos
              estadísticos y métodos de optimización, estudié las propiedades
              físicas y cinemáticas de estos sistemas.
              <br />
              <br />
              También he aplicado herramientas computacionales en otros
              contextos, como el procesamiento y estructuración de
              información mediante <b className="purple">SQL</b> durante mi
              experiencia en CONAF. Asimismo, he desarrollado proyectos de{" "}
              <b className="purple">Machine Learning</b>, utilizando
              algoritmos como Random Forest para analizar datos astronómicos
              del catálogo GALAH.
              <br />
              <br />
              Mis principales intereses se encuentran en el{" "}
              <i>
                <b className="purple">
                  aprendizaje automático, la inteligencia artificial y el
                  desarrollo de modelos predictivos
                </b>
              </i>
              . Me motiva explorar cómo las herramientas matemáticas y
              computacionales permiten extraer conocimiento de los datos y
              abordar problemas complejos en distintas áreas.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Ilustración personal"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

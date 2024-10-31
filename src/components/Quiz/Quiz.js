import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { VscDebugStart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

import { deploy } from '../../config';
import TiempoRestante from '../timer/Timer';

function Quiz() {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/quiz/game");
  };

  // Obtener la fecha actual
  const now = new Date();
  const targetDate = new Date('2024-11-01T12:00:00');

  // Verificar si deploy es true y si la fecha actual es después de la fecha objetivo
  const showContainer = deploy === false || (deploy === true && now >= targetDate);

  return (
    <Container fluid className="project-section">
      {showContainer ? (
        <Container>
          <h1 className="project-heading">
            ¿Estás listo/a para el <strong className="purple">Quiz </strong>?
          </h1>
          <p style={{ color: "white" }}>
            ¡Obtén la mejor puntuación para obtener premios!
          </p>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            onClick={handlePlay}
            className="btn"
          >
            <VscDebugStart />
            &nbsp;Iniciar
          </Button>
          <Particle />
        </Container>
      ) : (
        <TiempoRestante />
      )}
    </Container>
  );
}

export default Quiz;

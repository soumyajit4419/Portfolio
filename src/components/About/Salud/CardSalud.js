import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardSalud() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/memorial");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Este altar está dedicado a todos los profesionales de la salud que, con valentía y dedicación, enfrentaron la crisis del COVID-19 en primera línea. Médicos, enfermeras, técnicos y personal administrativo se convirtieron en faros de esperanza en medio del caos, arriesgando sus vidas para salvar a otros.

En cada turno agotador, en cada lágrima compartida y en cada vida salvada, demostraron el verdadero significado de la compasión y el sacrificio. Su entrega y fortaleza en tiempos de incertidumbre son un testimonio del poder del amor humano y la vocación.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "La salud es un derecho, y ustedes son los guardianes de ese derecho."{" "}
          </p>
          <button className="returnMemorialBTN" onClick={handleReturn}>
            Regresar al memorial
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CardSalud;

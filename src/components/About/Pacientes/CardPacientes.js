import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardPacientes() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/memorial");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Este altar es un tributo a todos los pacientes que enfrentaron el desafío del COVID-19 con valentía y determinación. Cada historia de lucha, cada momento de incertidumbre y cada paso hacia la recuperación son testimonios de la fuerza del espíritu humano ante la adversidad.

Los pacientes no solo enfrentaron la enfermedad, sino también el miedo, la soledad y el dolor. A través de su resistencia, nos enseñaron sobre la importancia de la esperanza, la comunidad y el amor. Cada uno de ustedes es un símbolo de coraje y perseverancia, y su viaje nos recuerda que nunca estamos solos en la lucha.

Hoy, honramos su lucha y celebramos su recuperación. Su valentía y resiliencia son un faro de inspiración para todos, y su memoria vive en cada vida que continúa gracias a su fuerza.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "La vida es un regalo, y cada día es una oportunidad para renacer."{" "}
          </p>
          <button className="returnMemorialBTN" onClick={handleReturn}>
            Regresar al memorial
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CardPacientes;

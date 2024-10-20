import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardCientificos() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/memorial");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Durante la pandemia del COVID-19, los científicos/as de todo el mundo trabajaron sin descanso para enfrentar un enemigo invisible. En laboratorios, universidades y centros de investigación, con mentes brillantes y corazones dedicados, buscaron respuestas, desarrollaron vacunas, tratamientos y nuevas tecnologías para salvar millones de vidas.
          <br/>
Este altar es un homenaje a su esfuerzo incansable, su valentía ante lo desconocido y su compromiso con la humanidad. Cada descubrimiento, cada avance, nos trajo más cerca de la luz en medio de la oscuridad. Recordamos hoy no solo a quienes entregaron sus conocimientos, sino también a aquellos que perdieron la vida en la lucha contra esta crisis
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "La ciencia no sólo nos enseña a entender el mundo, también nos enseña a cuidarlo."{" "}
          </p>
          <button className="returnMemorialBTN" onClick={handleReturn}>
            Regresar al memorial
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CardCientificos;

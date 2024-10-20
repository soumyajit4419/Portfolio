import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardVoluntarios() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/memorial");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Este altar rinde homenaje a todos los voluntarios que se unieron en un acto de solidaridad y altruismo durante la pandemia del COVID-19. Desde repartir alimentos y suministros médicos hasta brindar apoyo emocional, su dedicación fue fundamental para enfrentar la crisis y aliviar el sufrimiento de quienes más lo necesitaban.

En cada gesto amable, en cada hora de servicio y en cada sonrisa compartida, los voluntarios mostraron que la humanidad puede unirse en los momentos más difíciles. Su esfuerzo incansable y su compromiso desinteresado reflejan la mejor esencia de la solidaridad y el amor hacia los demás.

Recordamos a todos aquellos que se ofrecieron a ayudar, sin importar su formación o experiencia, y honramos su espíritu indomable. Su legado de bondad y esperanza nos inspira a seguir trabajando juntos por un mundo mejor.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Un pequeño acto de bondad puede cambiar el mundo."{" "}
          </p>
          <button className="returnMemorialBTN" onClick={handleReturn}>
            Regresar al memorial
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CardVoluntarios;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CardPlaneta() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/memorial");
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Este altar rinde homenaje a la Tierra, que ha enfrentado los retos sin precedentes que trajo consigo la pandemia del COVID-19. Durante este tiempo de crisis, la naturaleza respiró, los cielos se despejaron y la vida silvestre reclamó espacios que habían sido olvidados. Este paréntesis en la actividad humana nos recordó la interconexión entre todos los seres vivos y la importancia de cuidar el entorno que nos sostiene.

Mientras nosotros enfrentábamos una crisis sanitaria, el planeta nos ofreció una lección de resiliencia y renovación. Los ecosistemas comenzaron a recuperarse y los ríos se limpiaron, dándonos una oportunidad para reflexionar sobre nuestras acciones y su impacto en la Tierra.

Hoy, honramos al planeta que nos da vida y sustento. Nos comprometemos a aprender de esta experiencia y a trabajar juntos para proteger y restaurar nuestro hogar, asegurando un futuro sostenible para las generaciones venideras.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "La Tierra no pertenece al hombre; el hombre pertenece a la Tierra."{" "}
          </p>
          <button className="returnMemorialBTN" onClick={handleReturn}>
            Regresar al memorial
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CardPlaneta;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ fontSize: "1.5em" }}>
            <p style={{ textAlign: "initial" }}>
              Bonjour ! Je m'appelle <span className="purple">Sacha Desquesnes </span>,
              j'ai 21 ans et j'habite sur <span className="purple"> Caen</span> dans le Calvados.
              <br />
              <br />
              Depuis plusieurs années, je suis passionné par le développement web, ce qui m’a permis de développer des compétences solides et une forte motivation à progresser constamment.
              <br />
              <br />
             </p>
          </div>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

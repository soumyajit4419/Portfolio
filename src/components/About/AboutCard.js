import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je m'appelle <span className="purple">Sacha Desquesnes </span>
            et j'ai récemment été diplômé d'un<span className="purple"> BUT Informatique</span>.
            <br />
            Je suis actuellement à la recherche d'un emploi en tant que développeur web.
            <br />
            Passionné par le développement web, j'adore découvrir et apprendre de nouvelles technologies.
            <br />
            <br />
            En dehors de la programmation, je m'intéresse à d'autres activités, notamment :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎬 Le cinéma
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎮 Les jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> 🏃‍♂️ La course à pied
            </li>
            <li className="about-activity">
              <ImPointRight /> 💪 La musculation
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

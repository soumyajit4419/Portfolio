import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           
          Este altar de Día de Muertos rinde homenaje al sacrificio, la fortaleza y la resiliencia de todos aquellos que, 
          de diversas maneras, fueron impactados por la crisis sin precedentes del COVID-19. Aquí celebramos y recordamos 
          a los<span className="purple"> científicos, personal de salud, voluntarios, y pacientes </span>que lucharon valientemente, así como al<span className="purple"> planeta</span>, 
          que también sufrió cambios significativos. Este espacio nos invita a recordar no solo su dolor y pérdida, sino 
          su inmensa dedicación y esperanza. En este altar, honramos su memoria con las flores de cempasúchil, 
          el aroma del incienso y la luz de las velas, símbolos que guían sus almas de regreso a casa, recordándonos 
          que en la unión y la resistencia encontramos la verdadera esencia de la vida.
        
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "En los momentos de crisis, solo la imaginación es más importante que el conocimiento."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

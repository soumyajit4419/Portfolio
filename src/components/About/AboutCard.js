
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <span className="purple">Pablo Díaz</span>, de{" "}
            <span className="purple">Santiago, Chile</span>.
            <br />
            Soy Licenciado en Astronomía de la Pontificia Universidad Católica
            de Chile y cuento con un certificado académico en Computación e
            Informática.
            <br />
            Durante 2025 trabajé como asistente de investigación en el
            Instituto de Astrofísica UC.
            <br />
            <br />
            Fuera del ámbito académico, disfruto de:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Literatura 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Básquetbol 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Ajedrez ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Bajo eléctrico 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Videojuegos 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Science is more than a body of knowledge; it is a way of thinking.”
          </p>
          <footer className="blockquote-footer">Carl Sagan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

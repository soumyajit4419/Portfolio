
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
            <br />
            Me interesa explorar cómo distintas disciplinas pueden complementarse para comprender y abordar problemas complejos. Mi formación en astronomía me ha llevado a desarrollar una manera de pensar basada en el análisis, la observación y la búsqueda de explicaciones, pero también ha despertado mi interés por otras áreas, particularmente la ciencia de datos y la tecnología.
            <br />
            <br />
            Disfruto aprender cosas nuevas, experimentar con herramientas e ideas y enfrentar desafíos que me obliguen a salir de lo conocido. Me motiva especialmente encontrar conexiones entre distintos campos del conocimiento y transformar esa curiosidad en proyectos concretos..
            <br />
            <br />
            Fuera del trabajo y los estudios, disfruto de:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Leer novelas, especialmente aquellas
              relacionadas con tópicos filosóficos 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar básquetbol con amigos 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> El ajedrez y los juegos de mesa ♟️🎲
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender a tocar el bajo eléctrico 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Los videojuegos, uno de mis intereses más
              antiguos 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Science is more than a body of knowledge; it is a way of thinking."
          </p>
          <footer className="blockquote-footer">Carl Sagan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

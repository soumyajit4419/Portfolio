import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mateusz Oleksy </span>
            from <span className="purple"> Krakow, Poland.</span>
            <br />
             I specialize in building modern web applications and backend systems, focusing on performance and scalability.
            <br />
            I am currently working on e-commerce projects and real estate platforms, optimizing SEO and developing efficient backend solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Limited Sneakers
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that not only work but also make a meaningful impact."{" "}
          </p>
          <footer className="blockquote-footer">Mateusz Oleksy 🚀</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ricardo Marinho, </span>
            from <span className="purple"> Brazilia, Brazil.</span>
            <br />
            I am currently building RaizTech, a startup focused on smart agricultural 
            solutions and also developing an urban ride-sharing app to solve real mobility challenges.
            <br />
            I am pursuing a degree in Software Engineering, where I connect theory with practice to create scalable and meaningful solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Make poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing at guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is for those who know how to live, 
            death is the full stop for those who knew how to write.."{" "}
          </p>
          <footer className="blockquote-footer">Marcelo Gugu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

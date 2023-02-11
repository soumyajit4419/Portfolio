import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Makeri Jerry Isuwa </span>
            from <span className="purple"> Sanga LGA Kaduna State, Nigeria.</span>
            <br />I am a Full Stack Programmer, Agronomist and a Hip-Hop Head.
            <br />
            <br />
            Apart from coding, some other activities that I love to do includes;
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In life, Strive to improve!"{" "}
          </p>
          <footer className="blockquote-footer">Makeri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

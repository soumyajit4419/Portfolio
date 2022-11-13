import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Ellie Kerns </span>
            from <span className="purple"> Billings, Montana.</span>
            <br />I'm a full time Systems and Network Administrator currently working for Laurel
                  Public Schools in Montana
            <br />
            <br />
            Apart from IT, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on Adventures with my Wife
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything that happens is from now on"{" "}
          </p>
          <footer className="blockquote-footer">Bon Iver</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

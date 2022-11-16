import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Baddies, I am <span className="purple">Adonai Chaitezvi </span>
            from <span className="purple"> Chiweshe, Zimbabwe.</span>
            <br />I am a software developerby day and certified groovist by night
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing comics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "64424!"{" "}
          </p>
          <footer className="blockquote-footer">Adonai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple get-hacked">Saahil dutta, </span>
            from <span className="purple get-hacked"> USA </span>
            <br />I am a 8th grader in KCD.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating diffrent types of food
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Swiming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} className="get-hacked">
            "It has become appallingly obvious that our technology has exceeded
            our humanity."{" "}
          </p>
          <footer className="blockquote-footer get-hacked">
            Albert Einstein
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Andrea Jasper </span>
            with a passion for<span className="purple"> problem solving.</span>
            <br />Currently, I'm brushing up on JavaScript and React.
            <br />
            <br />
            Apart from coding, I enjoy...
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Surfing and Wakeboarding
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Horseback Riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"{" "}
          </p>
          <footer className="blockquote-footer">Andrea</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

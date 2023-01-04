import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jiahang Li </span>
            from <span className="purple"> Boston, the US.</span>
            <br />I am a graduate student in Computer Science in Boston University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports! Sports! Sports! 
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Steam Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is more to come!"{" "}
          </p>
          <footer className="blockquote-footer">Jiahang Li</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

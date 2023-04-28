import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Kyle Grande.</span>
            <br />
            I am from <span className="purple"> New York City.</span>
            <br />I am a computer science graduate from <span className="purple">Hunter College.</span>
            <br />
            <br />
            I have a diverse skillset in <span className="purple">software engineering</span>.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Architect
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Engineering
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.”{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

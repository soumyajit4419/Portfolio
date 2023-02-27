import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashok Pudasaini </span>
            from <span className="purple"> Nuwakot, Nepal.</span>
            <br />I am a Banker and freelancer in programming.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting new articles/blog regarding AI content or coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashok</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

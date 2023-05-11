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
            <span className="purple">Edilson Andrade (Edi) </span>
            from <span className="purple"> São Paulo, Brazil.</span>
            <br />
            I'm a skilled Senior Fullstack developer with a Bachelor's degree in
            System Analysis, bringing expertise and dedication to create digital
            solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity flex items-center">
              <ImPointRight className="mr-2" />
              <span>Playing Video Games</span>
            </li>
            <li className="about-activity flex items-center">
              <ImPointRight className="mr-2" />
              <span>Enjoy my family</span>
            </li>
            <li className="about-activity flex items-center">
              <ImPointRight className="mr-2" /> Travelling
            </li>
          </ul>

          <p className="text-purple-400 text-center">
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer text-purple-400">Edi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

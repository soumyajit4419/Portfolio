import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dawūd Vermeulen </span>
            from <span className="purple"> Cape Town, South Africa.</span>
            <br />
            I am currently employed as a developer at g0g0's X roads.
            <br />
            I have pivoted my career from IT Business Operations to Software Development. The journey of self-taught development has been a long and rewarding one. With a thirst for learning and solving problems I am always looking to get my hands dirty.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing with my daughter
            </li>
            <li className="about-activity">
              <ImPointRight /> Trail Running solo in the mountains
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with Allah SWT
            </li>
            <li className="about-activity">
              <ImPointRight /> The Beach, laying in the sun, a good read and dips in the ocean.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "How did it get so late so soon? It's night before it's afternoon. December is here before it's June. My goodness how the time has flewn. How did it get so late so soon?"{" "}
          </p>
          <footer className="blockquote-footer">Dr. Seuss </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />Hi Everyone, I am <span className="purple">Andrea Jasper </span>
            with a passion for<span className="purple"> problem solving.</span>
            <br />
            <br />After spending years as a project manager in the tech world, I decided it was time to go back to my roots, web development.
            <br />
            <br />Apart from coding, I enjoy...
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

          <p class="purple">
            "I have not failed. I've just found 10,000 ways that won't work"{" "}
          </p>
          <footer className="blockquote-footer">Thomas A. Edison</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

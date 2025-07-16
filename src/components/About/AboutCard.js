import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Cyrel Digang</span> from{" "}
            <span className="purple">Mandaluyong City</span>, Philippines.
            <br/>
            <br />
            I am <span className="purple">22 years old</span> and recently graduated with a{" "}
            <span className="purple">
              Bachelor of Science in Computer Science
            </span>{" "}
            from the <span className="purple">Polytechnic University of the Philippines</span>, graduating{" "}
            <span className="purple">Magna Cum Laude.</span>
            <br />
            <br />
            Aside from programming and other tech-related interests, here are a few things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing guitar and bass
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating music covers
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching basketball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Commit to the Lord whatever you do, and your plans will succeed."
          </p>
          <footer className="blockquote-footer">Proverbs 16:3</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

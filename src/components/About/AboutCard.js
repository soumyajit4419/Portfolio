import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Zach Antunes </span>
            currently living in the <span className="purple"> San Francisco Bay Area.</span>
            <br /> I am a graduate of UC Berkeley's Full-Stack Coding Bootcamp and UC San Diego, where I competed on the rowing team.
            <br />
            Most recently, I worked as a developer specialist at Microsoft.
            <br />
            <br />
            Here are a few of my hobbies!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercising
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not an accident, success is a choice."{" "}
          </p>
          <footer className="blockquote-footer">Steph Curry</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

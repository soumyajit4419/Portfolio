import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { about, habits, shortName } from "../../data/portfolioData";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {about.map((a, index) => {
              return <p dangerouslySetInnerHTML={{ __html: a }} />
            })}
          </p>
          <p style={{ textAlign: "justify" }}>
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            {habits.map((a, index) => {
              return <li class="about-activity" key={index} style={{display: "flex", gap: '10px', alignItems: "center"}}>
                <ImPointRight /> {a}
              </li>
            })}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">{ shortName } </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

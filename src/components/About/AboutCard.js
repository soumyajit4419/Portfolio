import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <strong><span className="blue">John Lukich </span></strong>
            currently living in <strong><span className="blue"> Colorado Springs, Colorado.</span></strong> I am a software developer, and on the lookout for new opportunities.
            <br />
            <br />
            Previously, I was in the US Air Force, where I worked in IT support, diplomacy, intelligence, and security. I worked around the world in those capacities, and have lived in 6 different countries on 4 continents.
            <br />
            <br />
            I have a passion for learning new technologies and building new products, and I love deciphering the inner workings of things to see what I can learn from them.
            <br />
            <br />
            When I'm not coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              - Rock climbing
            </li>
            <li className="about-activity">
              - Mountain biking
            </li>
            <li className="about-activity">
              - Snowboarding
            </li>
            <li className="about-activity">
              - Video games
            </li>
            <li className="about-activity">
              - Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: 40}}>
            "If you are going to do something, do it right"{" "}
          </p>
          <footer className="blockquote-footer">John</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

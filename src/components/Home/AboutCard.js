import React from "react";
import Card from "react-bootstrap/Card";

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
            Previously, I spent 20 years in and retired from the US Air Force. I worked in IT support, diplomacy, intelligence, and security. I was fortunate to work around the world in those capacities, and have lived in 6 different countries on 4 continents.
            <br />
            <br />
            As developer, I have a passion for learning new technologies and building new products. I particularly love deciphering the inner workings of things to see what I can learn from them and if they can be leveraged in different ways.
            <br />
            <br />
            When I'm not coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              • Rock climbing
            </li>
            <li className="about-activity">
              • Mountain biking
            </li>
            <li className="about-activity">
              • Snowboarding
            </li>
            <li className="about-activity">
              • Video games
            </li>
            <li className="about-activity">
              • Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: 40}}>
            "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying."{" "}
          </p>
          <footer className="blockquote-footer">Friedrich Nietzsche</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

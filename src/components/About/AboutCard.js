import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yoshihiro Yamada </span>
            from <span className="purple"> San Diego, California.</span>
            <br />
            I am Full-Stack Developer where I am efficient on my coding skills  in both frontend and backend development using React and Ruby.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Snowboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

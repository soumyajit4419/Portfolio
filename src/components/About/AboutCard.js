import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsha Vardhan </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a pre-final year student pursuing Bachelor of Technology in 
            Electronics and Communication Engineering at IIT Bhubaneswar.
            <br />
            Additionally, I am highly interested in web and app development and have worked on 
            various projects in the same domain.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Having fun with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programmers are good in Ctrl+C and Ctrl+V"{" "}
          </p>
          <footer className="blockquote-footer">Programmers 🙂</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdulrazaq Babi </span>
            from <span className="purple"> Yobe, Nigeria.</span>
            <br />
            I am a Full stack software engineer.
            <br />
            I have completed Bachelor of Technology (B.TECH) in Computer science at ATBU
            Bauchi also a Full stack software engineer at ALX Africa Nairobi, Kenya.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Babi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ARPAN MISHRA </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently a student at <span className="purple">APJ ABDUL KALAM TECHNICAL UNIVERSITY</span>
            <br />
            I am pursuing my btech in <span className="purple">Computer science engineering</span>
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
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
          <footer className="blockquote-footer">Arpan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

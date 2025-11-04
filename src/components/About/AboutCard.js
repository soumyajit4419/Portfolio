import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mohamed Ahmed</span>{" "}
            from <span className="purple">Tunsia</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">Affigen</span>.
            <br />I hold Bachelor's degree in Computer Science. (IMSc) in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

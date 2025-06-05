import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Casey Soh </span>
            <br />
            <br />
            I am a fresh graduate with a Master's degree in Applied Analytics and a Bachelor's degree in International Business and Management.
            <br />
            <br />
            I specialize in data science and data analyze, including computer vision, natural language processing (NLP), and machine learning.
            <br />
            <br />
            Outside of my technical interests, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with my dogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming/Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

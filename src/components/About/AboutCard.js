import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I'm <span className="purple">Hector Barahona </span>
            from <span className="purple"> San Francisco, California.</span>
            <br />
            🎓I recently graduated from Tulane SoPA, specializing in Integrated App Development.
            <br />
            🚀As a first-generation university graduate, I am proud to have achieved this
            milestone.🌱I am eager to continue learning and expanding my skillset.
            I am particularly interested in exploring emerging technologies and industry
            trends to stay at the forefront of the ever-evolving tech world.
            <br />
            <br />
            🎮Outside of my professional pursuits, I enjoy a variety of interests including:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing/ Watching Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make your own path and change the world around you"{" "}
          </p>
          <footer className="blockquote-footer">Naruto Uzumaki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

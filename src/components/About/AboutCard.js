import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Newbies, I am <span className="purple">Rohal Jamal </span>
            from <span className="purple"> Jhimpir, Pakistan.</span>
            <br />
            I am Studying software Engineering at Mehran University of Engineering and Technology.
            <br />
            I had the certification by google of Data Analyst.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never stop searching new method of tech!"{" "}
          </p>
          <footer className="blockquote-footer">RJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad zaidan faiz </span>
            from <span className="purple"> Bekasi, indonesia.</span>
            <br />
            I am currently at a Vocational High School.
            <br />
            I want to create this portfolio website to dig deeper into React JS which I have been studying for 5 months.
            <br />
            <br />
            Apart from coding, there are several other activities that I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Scraping the cellphone
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

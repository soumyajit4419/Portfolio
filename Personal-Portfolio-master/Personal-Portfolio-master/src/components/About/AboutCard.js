import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">SUMANJALI GELLU </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a Dotnet Developer developer at Winfo Solutions Pvt Ltd.
            <br />
            I Have Completed My Graduation at Dr.VRK Womens Engineering College, JNTUH 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Mahabharata
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SumanjaliGellu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

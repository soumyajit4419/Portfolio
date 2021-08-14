import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm an undergraduate mathematics student at <span className="purple">University of Waterloo. </span>
          I love working on projects such as Mobile Apps and Web Apps from design to development and in my spare time I like to learn more about machine learning algorithms.
            <br />
            <br />
            Current software interests:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend infrastruture
            </li>
            <li className="about-activity">
              <ImPointRight /> React
            </li>
            <li className="about-activity">
              <ImPointRight /> Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Decentralized Apps
            </li>
          </ul>

          <p style={{  textAlign: "justify" ,marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If you're afraid to change something it is clearly poorly designed"{" "}
          </p>
          <footer style={{  textAlign:"end" }} className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          We are  <span className="purple">Bright Angel Education Center </span>
            Located at <span className="purple"> Mulag , Kampala-Uganda.</span>
            <br />"Bright Angel Education Center is mixed day primary school.
            It was founded by a group of highly qualified and experienced teachers who have been teaching in top schools in Uganda.
            <br />
            <br />
            Why you should choose Bright Angels Education Center
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Condusive enviroment favorable for academics
            </li>
            <li className="about-activity">
              <ImPointRight /> Affordable fees structure
            </li>
            <li className="about-activity">
              <ImPointRight /> Enough space to accomodate many kids
            </li>
            <li className="about-activity">
              <ImPointRight /> Well trained staff to equip your kids with knowledge
            </li>
            
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "In God we trust"{" "}
          </p>
          <footer className="blockquote-footer">Bright Angel Education Center</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

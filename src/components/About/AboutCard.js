import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
     <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hello, I’m <span className="purple">Selenge Tulga</span> from&nbsp;
      <span className="purple">Ulaanbaatar, Mongolia</span>.
      <br />
      I finished my <b className="purple">Master's in Data Science</b> at the&nbsp;
      <span className="purple">University of Rochester. </span>.
      <br />
      <br />
      Beyond coding and data engineering, I am passionate about a variety of activities that enrich my creativity and perspective:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Exploring Films and Cinematic Art
      </li>
      <li className="about-activity">
        <ImPointRight /> Writing Technical and Personal Blogs
      </li>
      <li className="about-activity">
        <ImPointRight /> Traveling to Discover New Cultures and Ideas
      </li>
    </ul>

    <p style={{ color: "#FDDA0D" }}>
      "And when you want something, all the universe conspires to help you achieve it!"{" "}
    </p>
    <footer className="blockquote-footer">Paulo Coelho</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;

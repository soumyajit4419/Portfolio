import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard({ title, company, duration, description, skills }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <strong className="purple">{title}</strong>
            <br />
            <strong >{company}</strong>
            <br />
            <small>{duration}</small>
            <br />
            {description}
          </p>
          <ul AscendingList />
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="about-activity">
                <ImPointRight /> {skill}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
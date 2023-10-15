import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { data } from "../../Constants";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {data.about}
          </p>
          <ul>
            {
              data.activities.map((activity, index) => {
                return (
                  <li className="about-activity" key={index}>
                    <ImPointRight/> {activity}
                  </li>
                );
              })
            }
          </ul>

          <p className="quote">
            {data.quote}{" "}
          </p>
          <footer className="blockquote-footer">{data.name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

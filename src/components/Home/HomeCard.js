import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            let's <span className="purple">talk  </span>
            <span className="purple"> about:</span>
        </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

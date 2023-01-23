import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a Fullstack software developer passionate about people &
            <span class="purple"> engineering</span>. I am highly motivated and
            enthusiastic about software & technology. I have experience in
            TypeScript, JavaScript, React, React Native, NodeJs, GraphQL &
            MongoDB. I am also skilled in high level and technical
            problem-solving and I am able to learn new technologies quickly. In
            addition, as a developer I enjoy understanding the impact of the
            features I build on the business. I like to understand how they grow
            the business. And I am always seeking a challenging and rewarding
            position where I can utilize my skills and continue to grow as a
            developer.
          </p>
        </blockquote>
        <br />
        <br />
        <br />
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Ray Arcand</span>.
            I'm  a<span className="purple"> Japanese-American</span> in the U.S.
            <br /> I'm a senior at Prosper High School looking to major in <span className="purple"> Data Science </span> or <span className="purple"> Computer Science </span>
            along with a minor in <span className="purple"> Business</span>.
            
           
            
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
          “You don’t become confident by shouting affirmations in the mirror, but by having a stack of undeniable proof that you are who you say you are. Outwork your self doubt.”{" "}
          </p>
          <footer className="blockquote-footer">Alex Hormozi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

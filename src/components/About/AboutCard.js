import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Nguyen Tu Thanh Nhan </span>
            from <span className="purple"> Ho Chi Minh, Vietnam</span>
            <br /> I am a senior student pursuing an BSc
            in Computer Science at University of Information Technology.
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {/* <li className="about-activity">
              <ImPointRight /> Playing Games
            </li> */}
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            {/* <li className="about-activity">
              <ImPointRight /> 
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">ngtuthanhan</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fuad Miftah </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br /> I am a final year student pursuing a bachelor's degree in
            software engineering at Addis Ababa Science and Technology University (AASTU).
            <br />
            Additionally, I am currently an active member of a2sv,
            a community of highly qualified software developers in Ethiopia as well as Africa.
            where I am improving my skills in Data structures and algorithms,
            web development as well as soft skills like communication.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with family and friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fuad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

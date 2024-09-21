import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Esmail </span>
            from <span className="purple"> Behura , Egypt.</span>
            <br />
            I am Recent Computer Science and Information Systems graduate.
            <br />
            I have strong programming skills in <span className="purple"> Java, C++, and expertise in OOP, algorithms, and cloud technologies.</span> Seeking a software development position where I can apply my skills in developing efficient and innovative solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Studying 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

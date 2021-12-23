import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Bryan Beltran; </span>
            I live in <span className="purple"> Bloomington, Minnesota.</span>
            <br />I am a Software Engineer at Chewy. I'm an alumnus of Minnesota State University Mankato, and I'm a proud pet parent of three cats (Leo, Louis, and Felix).
            <br />
            <br />
            Apart from programming, some other activities I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping & Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Rockhounding
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

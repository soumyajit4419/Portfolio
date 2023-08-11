import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Image from "../../Assets/demo.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <img src={Image} alt="about" className="img-fluid" />
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImAirplane, ImDrive, ImPointRight, ImRoad } from "react-icons/im";
import { IoAirplaneOutline, IoCarSportOutline } from "react-icons/io5";
import { MdOutlineDirectionsBike } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Timothe Coniel </span>
            from <span className="purple"> Strasbourg, France.</span>
            <br />
            I am currently a studying at Unikl MIIT in Kuala Lumpur, Malaysia.
            <br />
            I'm in my fourth Year at Epitech, one more year to do before
            completing my{" "}
            <span className="purple">
              Expert in Information Technology
            </span>{" "}
            master degree.
            <br />
            <br />
            Apart from coding, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <IoCarSportOutline /> Driving
            </li>
            <li className="about-activity">
              <IoAirplaneOutline /> Travelling
            </li>
            <li className="about-activity">
              <MdOutlineDirectionsBike /> Cycling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

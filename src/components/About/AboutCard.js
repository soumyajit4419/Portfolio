import React from "react";
import Card from "react-bootstrap/Card";
import { FaBullseye } from "react-icons/fa6";

import { FaExternalLinkAlt } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="highlighted-text">Paulo Henriques </span>
            from <span className="highlighted-text"> Portugal.</span>
            <br />
            I am currently working as <span className="highlighted-text">Software Engineer</span> at <a className="external-link" href="https://epilot.cloud/en/">Epilot<FaExternalLinkAlt size={19} className="external-link-icon" /></a>.
            <br />
            I'm also <span className="highlighted-text">Founder</span> and maintainer of <a className="external-link" href="https://www.specialclinic.pt/">Special Clinic<FaExternalLinkAlt size={19} className="external-link-icon" /></a>.
            <br />
            <br />
            Besides programming, there are several other <span className="highlighted-text">hobbies</span> I really enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <FaBullseye /> Sports <span className="emoji">⚽</span>
            </li>
            <li className="about-activity">
              <FaBullseye /> F1 <span className="emoji">🏎️</span>
            </li>
            <li className="about-activity">
              <FaBullseye /> Travelling <span className="emoji">✈️</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

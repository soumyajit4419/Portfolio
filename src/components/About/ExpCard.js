import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExpCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I did my internship at{" "}
            <span className="purple">QX Information Technology Inc.</span>{" "}
            from August to September 2024. My main task was{" "}
            <span className="purple">testing a software called CrewMaster</span>.
            <br />
            <br />
            It’s a system used by maritime companies to manage their employees — like tracking if someone is onboard or on vacation. It’s a big system with many features.
            <br />
            <br />
            Aside from testing, we also had some experience with{" "}
            <span className="purple">client meetings</span>. Near the end of my internship, we helped{" "}
            <span className="purple">redesign one of their product websites</span> by updating its CSS code.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Tested CrewMaster system features
            </li>
            <li className="about-activity">
              <ImPointRight /> Attended client meetings
            </li>
            <li className="about-activity">
              <ImPointRight /> Helped in website redesign using CSS
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExpCard;

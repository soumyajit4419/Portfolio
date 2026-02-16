import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Saad Kaddioui</span>{" "}
            from <span className="purple">Agadir, Morocco</span>.
            <br />
            I’m currently working as an{" "}
            <span className="purple">English Teacher</span> in{" "}
            <span className="purple">Souss Massa Region</span>.
            <br />I hold a bachlor degree  (IMSc) in{" "}
            <span className="purple">English language teaching</span> from{" "}
            <span className="purple">the higher school of education and training</span>.
            <br />
            <br />
            Outside of teaching, I love creating digital content to keep my creativity alive 
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kira</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

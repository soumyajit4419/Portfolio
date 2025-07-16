import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AchievementCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            One of my biggest achievements was working on our undergraduate thesis titled{" "}
            <span className="purple">"Smishing Detection System for Code-Mixed Messages Using Transfer Learning of XLM-RoBERTa."</span>
            <br />
            <br />
            In simple terms, we built an <span className="purple">AI system</span> that detects smishing (SMS phishing) messages written in{" "}
            Taglish (Tagalog-English). We were a group of five, and I served as the{" "}
            <span className="purple">main developer</span> while also contributing to the writing of our research paper.
            <br />
            <br />
            After our successful defense, one of our panelists submitted our study to the{" "}
            <span className="purple">4th PUP Research Pitching Competition</span>. We were honored to be selected as{" "}
            <span className="purple">Finalists</span>, although we didn't make it to the top 3.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Main Developer of a Smishing Detection AI System
            </li>
            <li className="about-activity">
              <ImPointRight /> Built a Taglish dataset from scratch
            </li>
            <li className="about-activity">
              <ImPointRight /> Finalist in a research pitching competition
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;

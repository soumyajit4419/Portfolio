import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Newbies, I'm <span className="purple">Rohal Jamal </span>
            from <span className="purple"> Jhimpir, Pakistan.</span>
            <br />
            I'm seeking Bachelor's Degree in Software Engineer from Mehran University of Engineering and Technology.
            <br />
            I had the certification by Google of Data Analyst.
            <br />
            I learned <span>MERN STACK Development</span> in the meantime so I can start developing new Ideas of my own, though yet I'm not professional but also not a newbie too.
            <br />
            I work passionately for myself and trying to go for youth to let them understand the chances of being here. I myself excited for my expediction ahead. I'm serious type guy, serious for future and for family. I love to be in a circle which understands me and my thoughts of future planning. I take my stuff seriously and I try not to depend on anyone.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

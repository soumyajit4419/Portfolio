import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Newbies, I am <span className="purple">Rohal Jamal </span>
            from <span className="purple"> Jhimpir, Pakistan.</span>
            <br />
            I am Studying <span className="purple"> Software Engineering</span> at Mehran University of Engineering and Technology. A tech enthusiast and full of surprises. 
            <br />
            I had the certification by <span className="purple"> Google </span> of <span className="purple"> Data Analyst </span>.
            <br />
            I learned the <span className="purple">  MERN STACK development </span> in the meantime so I can start developing new Ideas of my own, though yet I'm not professional but also not a newbie too.
            <br />
            I work passionately for myself and trying to go for youth to let them understand the chances of being here. I myself excited for my expediction ahead. I'm serious type guy, serious for future and for family. I love to be in a circle which understands me and my thoughts of future planning. I take my stuff seriously and I try not to depend on anyone.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never stop searching new method of tech!"{" "}
          </p>
          <footer className="blockquote-footer">RJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

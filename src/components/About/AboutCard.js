import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
//<span className="purple">
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <section aria-label="About Me">
          <h2 style={{ display: 'none' }}>About Me</h2>
          <article className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hello! I am a <span className="purple">passionate</span> and driven software developer with a strong
              background in full-stack development, focused on crafting responsive
              and user-friendly web and mobile <span className="purple">applications</span>.
              <br /><br />
              My expertise spans a variety of technologies including <span className="purple">TypeScript</span>,
              React, NestJs, MongoDB, and Docker, enabling me to build robust
              solutions from the ground up. I thrive in dynamic environments,
              quickly adapting to new <span className="purple">challenges</span> and continuously expanding my
              skill <span className="purple">set</span>.
              <br /><br />
              Throughout my career, I have <span className="purple">effectively</span> led and
              contributed to projects that enhance operational efficiencies and
              improve user experiences. My <span className="purple">approach</span> is deeply rooted in a
              commitment to quality and innovation, leveraging modern technologies
              to solve real-world problems. As a lifelong learner, I am always
              eager to explore new <span className="purple">technologies</span> and methodologies that unlock value for <span className="purple">people</span>.
            </p>
          </article>
        </section>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

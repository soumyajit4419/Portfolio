import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vasim Khan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            <br />I am currently employed as a Technical Consultant at
            <span className="purple"> Promantia. </span>
            <br />
            <br />
            Skilled at creating dynamic and interactive web applications that
            align with user needs and deliver optimal results.
            <br />
            <br />
            Proficient in modern front-end technologies, including
            <br />
            <br />
            Languages:{" "}
            <span className="purple"> {""}JavaScript, TypeScript</span>
            <br />
            <br />
            Frameworks and Libraries:
            <span className="purple"> {""}React.js, Angular.js, Vue 3</span>
            <br />
            <br />
            Styling Tools:
            <span className="purple">
              {""} HTML, Bootstrap, CSS, TailwindCss
            </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

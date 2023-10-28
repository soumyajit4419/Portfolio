import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fuad Miftah </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br /> I am a software engineering student at 
            Addis Ababa Science and Technology University (AASTU). The first technology university in Ethiopia.
            My journey into the world of programming began when I was introduced to a laptop upon entering university. 
            However, the outbreak of the COVID-19 pandemic disrupted our academic lives. 
            During this time, I turned to YouTube courses to learn Python, and it was here that I fell in love with programming. 
            <br />

          </p>
          <p style={{ textAlign: "justify" }}>
          Additionally, I am an active member of a2sv.
            A2SV has placed <span className="purple"> over 50 students </span> in full-time and internship roles at top tech companies, 
            including <span className="purple">Google, Amazon, LinkedIn, Palantir, Databricks, Bloomberg, and more. </span>
             I solved <span className="purple">over 600 </span>data structure and algorithm questions using Python on platforms like LeetCode and
            Codeforces during the learning period.
          </p>
          <p style={{ textAlign: "justify" }}>
          With <span className="purple">over two years</span> of hands-on experience in MERN (MongoDB, Express, React, Node.js) Stack development, 
          I further enriched my skill set by enrolling in Yenetta Code's intensive five-month bootcamp. 
          During this program, I had the opportunity to lead a project, an online bookstore application, 
          where my prior expertise in MERN Stack technologies played a crucial role.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with family and friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football (Fand of Manchester United)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fuad</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

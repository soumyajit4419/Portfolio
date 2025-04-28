import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Aly Esmaeil</span>
            from <span className="purple">Egypt.</span>
            <br />
            I am a passionate <span className="purple">DevOps Engineer</span> with strong expertise in 
            <span className="purple"> Cloud Computing, Automation, Infrastructure as Code, and Linux Systems Administration.</span>
            <br />
            I have hands-on experience with technologies like 
            <span className="purple"> AWS, OpenStack, Kubernetes, Docker, Terraform, Jenkins, and Ansible.</span>
            <br />
            <br />
            I am committed to building scalable, secure, and efficient infrastructure solutions and continuously learning new technologies to improve system reliability and performance.
            <br />
            <br />
            Apart from my professional work, some activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New DevOps Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing Knowledge through Tech Blogs and Tutorials
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

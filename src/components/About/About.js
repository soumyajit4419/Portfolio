import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

import Aboutcard from "./AboutCard";



function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
       
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
         
          
       
       

        
      </Container>
    </Container>
  );
}

export default About;

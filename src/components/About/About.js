import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import expImg from "../../Assets/exp1.jpg";
import pitchImg from "../../Assets/pitching.jpg";
import Toolstack from "./Toolstack";
import AchievementCard from "./AchievementCard";
import ExpCard from "./ExpCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/*for IM*/}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          
          {/*for achievements*/}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple">Achievement</strong>
            </h1>
            <AchievementCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", paddingLeft: "30px"}}
            className="about-img"
          >
            <img src={pitchImg} alt="about" className="img-fluid" style={{ borderRadius: "1rem" }} />
          </Col>

          {/*for Exp*/}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple">Experience</strong> / Internship
            </h1>
            <ExpCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", paddingLeft: "30px", borderRadius: "1rem" }}
            className="about-img"
          >
            <img src={expImg} alt="about" className="img-fluid" style={{ borderRadius: "1rem" }} />
          </Col>
        </Row>

        
        <h1 className="project-heading">
          <strong>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

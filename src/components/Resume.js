import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import Resumecontent from "./ResumeContent";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../Assets/Soumyajit-Resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR ML ENGINEER [Omdena]"
              date="June 2020 - August 2020"
              content={[
                "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
              date="2018 - Present"
              content={["CGPA: 7.2 (Till 4rd Sem)"]}
            />
            <Resumecontent
              title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Current rank in Spoj 17827",
                "Current rank in HackerRank 15965",
                "Top Perfomer in Code-Break 1.0",
                "Paticipant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

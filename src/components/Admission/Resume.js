import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
//import Resumecontent from "./ResumeContent";
//import axios from "axios";
import pdf from "../../Assets/FEES-STRUCTURE-ADMISSION-FORM.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
 /* const uri = "";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download Admission Form
          </Button>
        
      </Container>
    </Container>
  );
}

export default Resume;

import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/EshanCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// const resumeLink =
//   "https://cors-anywhere.herokuapp.com/drive.google.com/file/d/15KDtjybyt1_JZtdpxTPbqzP-6BZiyRQ7/view?usp=share_link";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <div className="container">
      <Row>
     
      <h2>Roles in which I am <span className="purple"> Currently Seeking Opportunities </span>-</h2>
      <hr/>
      <ol>
        <li className="list_item_roles" >Software Engineer</li>
        <li className="list_item_roles" >Machine Learning Engineer</li>
        <li className="list_item_roles" >Data Scientist</li> 
        <li className="list_item_roles" >Data Engineer</li> 
        <li className="list_item_roles" >Data Analyst</li>
        <li className="list_item_roles" >Web Developer</li> 
        <li className="list_item_roles" >MERN Stack Developer</li> 

      </ol>
    
      </Row>
      <hr/>
      </div>
      <h1 className="text-center mt-5 pt-3"> My <strong className="purple"> CV</strong>👇</h1>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} height="1000" />
          </Document>
        </Row>

     
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

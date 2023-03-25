import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/my-resume-10-1-22.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://resume.github.io/?NeonGamerBot-QK"; //"https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

/**
 * I'm using the useState hook to set the width of the window to 1200px. Then I'm using the useEffect
 * hook to set the width of the window to the actual width of the window. Then I'm returning a div with
 * a container, a row, and a button. The row has a Document component from react-pdf and a Page
 * component from react-pdf. The Page component has a prop called scale that I'm setting to 1.7 if the
 * width of the window is greater than 786px, otherwise I'm setting it to 0.6.
 *
 * I'm not sure if this is the best way to do this, but it works.
 *
 * I hope this helps someone.
 * @returns A React component.
 */
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ height: "1660px" }}>
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"#/about"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Coming soon
          </Button>
        </Row> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* <iframe src="https://resume.github.io/?NeonGamerBot-QK" title="Resume" className="d-flex justify-content-center" scale={width > 786 ? 1.7 : 0.6} width="500" height={786}/>  */}
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
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

import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdf from '../assets/Resume.pdf'
import Particle from '../components/Particle.js'
import '../styles/Resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Resume() {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const DownloadButton = (
    <Row style={{ justifyContent: 'center', position: 'relative' }}>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: '250px' }}
        data-testid="download-button"
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </Row>
  )

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download button */}
        {DownloadButton}

        {/* Resume view */}
        <Row className="resume" data-testid="pdf-document">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              data-testid="pdf-page-1"
            />
          </Document>
        </Row>

        {/* Download button */}
        {DownloadButton}
      </Container>
    </div>
  )
}

export default Resume

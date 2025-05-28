import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || prev));
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume justify-content-center">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center resume-border"
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1 : 0.6}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={4} className="d-flex justify-content-center gap-2">
            <Button
              variant="secondary"
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              style={{ maxWidth: "150px" }}
            >
              Previous Page
            </Button>
            <Button
              variant="secondary"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              style={{ maxWidth: "150px" }}
            >
              Next Page
            </Button>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "10px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> Download Resume
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "10px" }}>
          <p>
            Page {pageNumber} of {numPages || 1}
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
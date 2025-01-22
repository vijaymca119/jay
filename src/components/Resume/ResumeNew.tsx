import  { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../../Assets/resume.css";
import { pdfjs } from "react-pdf";

// Set up the PDF worker
try {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
} catch (error) {
  console.error("Failed to load local PDF worker, falling back to CDN.");
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

// Path to the PDF in the public folder
const pdf = "/vijay_Kumar_Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          {/* Download Button (Top) */}
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
                aria-label="Download CV"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          {/* PDF Viewer with Scrollbar */}
          <Row className="resume" style={{ overflowY: "auto", maxHeight: "80vh" }}>
            <Document
                file={pdf}
                className="d-flex justify-content-center"
                onLoadError={(error) => console.error("Error loading PDF:", error.message)}
                onLoadSuccess={() => console.log("PDF loaded successfully")}
                onSourceError={(error) => console.error("Error with PDF source:", error.message)}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>

          {/* Download Button (Bottom) */}
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
                aria-label="Download CV"
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
import React from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// Import the PDF file from the Assets folder
import samplePdf from '../../Assets/vijay_Kumar_Resume.pdf';

const PdfViewer: React.FC = () => {
    const toolbarPluginInstance = toolbarPlugin();

    // Function to handle the download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = samplePdf; // Use the imported PDF file path
        link.download = 'Vijay_Kumar_Resume.pdf'; // Specify the download file name
        link.click(); // Programmatically trigger the download
    };

    return (
        <div>

        <div
            className="flex flex-col justify-center items-center h-screen bg-gray-100"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
                paddingTop: '60px', // Add padding from the top
                position: 'relative', // Ensure the button can be absolutely positioned
            }}
        >

            <Button
                variant="primary"
                onClick={handleDownload} // Trigger download on click
                style={{
                    maxWidth: "250px",
                    paddingTop: "20px", // Adds padding inside the button (top)
                }}
                aria-label="Download CV"
            >
                <AiOutlineDownload />
                &nbsp;Download CV
            </Button>


            {/* PDF Viewer */}
            <div
                className="border rounded-lg shadow-lg"
                style={{
                    height: '90%', // 90% of the viewport height
                    width: '70%', // 70% of the viewport width
                    overflow: 'hidden', // Prevent content overflow
                    border: '1px solid #ccc', // Border for visual clarity
                }}
            >
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={samplePdf}
                        plugins={[toolbarPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
        </div>
    );
};

export default PdfViewer;

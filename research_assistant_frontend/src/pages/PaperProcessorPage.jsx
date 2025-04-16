import React, { useState } from 'react';
import PaperUploader from '../components/processor/PaperUploader';
import ProcessingResult from '../components/processor/ProcessingResult';


import './PaperProcessorPage.css'; // Assuming you have a CSS file for styling
const PaperProcessorPage = () => {
  const [processingResult, setProcessingResult] = useState(null);

  const handleProcessingComplete = (result) => {
    setProcessingResult(result);
    window.scrollTo(0, 0);
  };

  return (
    <div className="paper-processor-page">
      <div className="page-header">
        <h1>Research Paper Processor</h1>
        <p>Upload a research paper PDF to get summary, topics, and audio content</p>
      </div>

      {processingResult ? (
        <div className="processor-content">
          <ProcessingResult result={processingResult} />
          <button 
            className="btn btn-outline"
            onClick={() => setProcessingResult(null)}
          >
            Process Another Paper
          </button>
        </div>
      ) : (
        <div className="processor-content">
          <PaperUploader onProcessingComplete={handleProcessingComplete} />
          
          <div className="processor-info">
            <h3>How it works</h3>
            <ol className="processor-steps">
              <li>Upload your research paper in PDF format</li>
              <li>Our system will analyze the paper and extract key information</li>
              <li>Get a comprehensive summary, topic analysis, and audio versions</li>
              <li>Listen to your paper as a podcast or review the generated content</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaperProcessorPage;
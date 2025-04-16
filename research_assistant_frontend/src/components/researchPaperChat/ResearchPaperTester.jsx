// src/components/researchPaperChat/ResearchPaperTester.jsx
import React, { useState } from 'react';
import { uploadPdf, askPdfQuestion } from '../../api/researchPaperChat';
import './ResearchPaperTester.css';

const ResearchPaperTester = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pdfId, setPdfId] = useState('');
  const [question, setQuestion] = useState('');
  const [uploadResponse, setUploadResponse] = useState(null);
  const [askResponse, setAskResponse] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');

  const handleFileChange = (e) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);
    
    try {
      const response = await uploadPdf(file);
      setUploadResponse(response);
      setPdfId(response.pdf_id);
      setActiveTab('ask');
    } catch (err) {
      setError(err.message || 'Failed to upload PDF');
    } finally {
      setLoading(false);
    }
  };

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    if (!pdfId || !question.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const response = await askPdfQuestion(pdfId, question);
      setAskResponse(response);
    } catch (err) {
      setError(err.message || 'Failed to get answer');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="research-paper-tester">
      <h2>Postman Test Helper</h2>
      <p className="tester-description">
        This interface helps you test the PDF chat API endpoints directly from the browser.
        You can use this to verify functionality before setting up Postman.
      </p>

      <div className="tester-tabs">
        <button 
          className={`tab ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          1. Upload PDF
        </button>
        <button 
          className={`tab ${activeTab === 'ask' ? 'active' : ''}`}
          onClick={() => setActiveTab('ask')}
          disabled={!pdfId}
        >
          2. Ask Question
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'upload' ? (
          <div className="upload-tab">
            <h3>Upload a PDF</h3>
            <form onSubmit={handleUpload} className="upload-form">
              <div className="form-group">
                <label htmlFor="pdf-file">Select PDF File:</label>
                <input
                  type="file"
                  id="pdf-file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
              <button 
                type="submit" 
                className="submit-button" 
                disabled={!file || loading}
              >
                {loading ? 'Uploading...' : 'Upload PDF'}
              </button>
            </form>

            {uploadResponse && (
              <div className="response-section">
                <h4>Upload Response:</h4>
                <pre className="response-preview">{JSON.stringify(uploadResponse, null, 2)}</pre>
                <div className="postman-instructions">
                  <h4>Postman Equivalent:</h4>
                  <div className="instruction-block">
                    <strong>Method:</strong> POST<br />
                    <strong>URL:</strong> http://localhost:8000/pdf/upload/<br />
                    <strong>Request type:</strong> Form-data<br />
                    <strong>Key:</strong> file (select File type)<br />
                    <strong>Value:</strong> Select PDF file
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="ask-tab">
            <h3>Ask a Question</h3>
            <form onSubmit={handleAskQuestion} className="ask-form">
              <div className="form-group">
                <label htmlFor="pdf-id">PDF ID (from upload response):</label>
                <input
                  type="text"
                  id="pdf-id"
                  value={pdfId}
                  onChange={(e) => setPdfId(e.target.value)}
                  className="text-input"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="question">Your Question:</label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="text-area"
                  placeholder="What is the main topic of this document?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-button" 
                disabled={!pdfId || !question.trim() || loading}
              >
                {loading ? 'Getting Answer...' : 'Ask Question'}
              </button>
            </form>

            {askResponse && (
              <div className="response-section">
                <h4>Answer Response:</h4>
                <pre className="response-preview">{JSON.stringify(askResponse, null, 2)}</pre>
                <div className="postman-instructions">
                  <h4>Postman Equivalent:</h4>
                  <div className="instruction-block">
                    <strong>Method:</strong> POST<br />
                    <strong>URL:</strong> http://localhost:8000/pdf/ask/<br />
                    <strong>Request type:</strong> raw JSON<br />
                    <strong>Body:</strong>
                    <pre className="code-block">{`{
  "pdf_id": "${pdfId}",
  "question": "${question}"
}`}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {error && <div className="error-banner">{error}</div>}
    </div>
  );
};

export default ResearchPaperTester;
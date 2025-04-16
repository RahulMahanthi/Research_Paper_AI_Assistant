// src/components/analyzer/AnalyzerUpload.jsx
import React, { useState } from 'react';
import './AnalyzerUpload.css';

const AnalyzerUpload = ({ onUpload, analyzing }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="analyzer-upload">
      <h2>Upload Research Paper for Analysis</h2>
      <p className="upload-description">
        Upload a PDF, DOCX, or TXT file to analyze its content for future work, limitations, and research directions.
      </p>
      
      <form
        className={`upload-form ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onSubmit={handleSubmit}
      >
        <div className="file-drop-area">
          <input 
            type="file" 
            id="file-upload" 
            className="file-input"
            onChange={handleFileChange}
            accept=".pdf,.docx,.txt"
          />
          <label htmlFor="file-upload" className="file-label">
            <div className="upload-icon">📄</div>
            <div className="upload-text">
              {file ? file.name : 'Drag & drop your file here or click to browse'}
            </div>
          </label>
        </div>
        
        {file && (
          <div className="selected-file">
            <p>Selected file: <strong>{file.name}</strong></p>
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={analyzing}
            >
              {analyzing ? 'Analyzing...' : 'Analyze Paper'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AnalyzerUpload;
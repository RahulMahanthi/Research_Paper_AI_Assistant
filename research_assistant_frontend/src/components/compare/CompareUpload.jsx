import React, { useState } from 'react';
import './CompareUpload.css';

const CompareUpload = ({ onSubmit }) => {
  const [paper1, setPaper1] = useState(null);
  const [paper2, setPaper2] = useState(null);
  const [errors, setErrors] = useState({});

  const handlePaper1Change = (e) => {
    setPaper1(e.target.files[0]);
  };

  const handlePaper2Change = (e) => {
    setPaper2(e.target.files[0]);
  };

  const validateFiles = () => {
    const newErrors = {};
    
    if (!paper1) {
      newErrors.paper1 = 'Please select the first paper';
    } else {
      const fileType = paper1.type;
      if (fileType !== 'application/pdf' && 
          fileType !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && 
          fileType !== 'text/plain') {
        newErrors.paper1 = 'File must be PDF, DOCX, or TXT';
      }
    }
    
    if (!paper2) {
      newErrors.paper2 = 'Please select the second paper';
    } else {
      const fileType = paper2.type;
      if (fileType !== 'application/pdf' && 
          fileType !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && 
          fileType !== 'text/plain') {
        newErrors.paper2 = 'File must be PDF, DOCX, or TXT';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateFiles()) {
      onSubmit(paper1, paper2);
    }
  };

  return (
    <div className="compare-upload">
      <h2>Upload Papers for Comparison</h2>
      <p className="compare-description">
        Upload two research papers to analyze their similarities and differences.
        Supported formats: PDF, DOCX, TXT.
      </p>
      
      <form onSubmit={handleSubmit} className="compare-upload-form">
        <div className="paper-upload-container">
          <div className="paper-upload-box">
            <h3>Paper 1</h3>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="paper1"
                onChange={handlePaper1Change}
                accept=".pdf,.docx,.txt"
              />
              <label htmlFor="paper1" className="file-upload-label">
                {paper1 ? paper1.name : 'Choose File'}
              </label>
            </div>
            {errors.paper1 && <div className="error-message">{errors.paper1}</div>}
            {paper1 && <div className="file-name">{paper1.name}</div>}
          </div>
          
          <div className="paper-upload-box">
            <h3>Paper 2</h3>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="paper2"
                onChange={handlePaper2Change}
                accept=".pdf,.docx,.txt"
              />
              <label htmlFor="paper2" className="file-upload-label">
                {paper2 ? paper2.name : 'Choose File'}
              </label>
            </div>
            {errors.paper2 && <div className="error-message">{errors.paper2}</div>}
            {paper2 && <div className="file-name">{paper2.name}</div>}
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary btn-compare"
          disabled={!paper1 || !paper2}
        >
          Compare Papers
        </button>
      </form>
    </div>
  );
};

export default CompareUpload;
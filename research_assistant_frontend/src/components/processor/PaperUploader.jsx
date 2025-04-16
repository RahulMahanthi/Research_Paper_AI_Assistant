import React, { useState } from 'react';
import { useProcessor } from '../../hooks/useProcessor';

import './PaperUploader.css'; // Assuming you have a CSS file for styling
const PaperUploader = ({ onProcessingComplete }) => {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const { processPaper, loading, error } = useProcessor();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileError('');
    } else {
      setFile(null);
      setFileError('Please select a valid PDF file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setFileError('Please select a PDF file');
      return;
    }
    
    try {
      const result = await processPaper(file);
      if (result && onProcessingComplete) {
        onProcessingComplete(result);
      }
    } catch (err) {
      console.error('Error during submission:', err);
    }
  };

  return (
    <div className="paper-uploader">
      <h2>Upload Research Paper</h2>
      <form onSubmit={handleSubmit}>
        <div className="file-input-container">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            id="paper-file"
          />
          <label htmlFor="paper-file" className="file-input-label">
            {file ? file.name : 'Choose PDF File'}
          </label>
        </div>
        
        {fileError && <div className="error-message">{fileError}</div>}
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!file || loading}
        >
          {loading ? 'Processing...' : 'Process Paper'}
        </button>
      </form>
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default PaperUploader;
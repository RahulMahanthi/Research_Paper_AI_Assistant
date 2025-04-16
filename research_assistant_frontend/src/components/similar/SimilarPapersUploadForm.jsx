// src/components/similar/SimilarPapersUploadForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { findSimilarPapers } from '../../services/similarService';
import './SimilarPapersUploadForm.css';

const SimilarPapersUploadForm = ({ onResults }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Check if file is PDF
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file only');
      setFile(null);
      return;
    }

    setError('');
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a PDF file to upload');
      return;
    }

    setLoading(true);

    try {
      const result = await findSimilarPapers(file, token);
      if (result && result.success) {
        onResults(result.results);
      } else {
        setError('Failed to find similar papers. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while finding similar papers.');
      console.error('Error finding similar papers:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="similar-papers-upload">
      <h2>Find Similar Research Papers</h2>
      <p>Upload a research paper to find similar papers in our database.</p>

      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="paperFile">Select PDF File</label>
          <input
            type="file"
            id="paperFile"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={loading}
          />
          <small>Only PDF files are accepted</small>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!file || loading}
        >
          {loading ? 'Searching...' : 'Find Similar Papers'}
        </button>
      </form>
    </div>
  );
};

export default SimilarPapersUploadForm;

import React, { useState, useRef } from 'react';
import { usePapers } from '../../hooks/usePapers';
import './UploadPaperForm.css';

const UploadPaperForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const { uploadPaper, loading } = usePapers();
  const fileInputRef = useRef(null); // ✅ Added ref to reset file input

  // Handle File Selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Validate file type
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file only');
      setFile(null);
      return;
    }

    setError('');
    setFile(selectedFile);
  };

  // Handle File Upload
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a PDF file to upload');
      return;
    }

    setUploading(true);

    try {
      const uploadedPaper = await uploadPaper(file);
      if (uploadedPaper) {
        setFile(null);
        fileInputRef.current.value = ''; // ✅ Reset file input
        if (onUploadSuccess) {
          onUploadSuccess(uploadedPaper);
        }
      }
    } catch (err) {
      setError('Failed to upload paper. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-paper-form">
      <h2>Upload Research Paper</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="paperFile">Select PDF File</label>
          <input
            ref={fileInputRef}
            type="file"
            id="paperFile"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={uploading || loading}
          />
          <small>Only PDF files are accepted</small>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!file || uploading || loading}
        >
          {uploading || loading ? 'Uploading...' : 'Upload Paper'}
        </button>
      </form>
    </div>
  );
};

export default UploadPaperForm;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { usePapers } from '../hooks/usePapers';
import PaperList from '../components/papers/PaperList';
import UploadPaperForm from '../components/papers/UploadPaperForm';
const PapersPage = () => {
  const { isAuthenticated } = useAuth();
  const { papers, loading, error, fetchPapers } = usePapers();
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPapers();
    }
  }, [isAuthenticated, fetchPapers]);

  const handleUploadSuccess = () => {
    setShowUploadForm(false);
    fetchPapers(); // Refresh papers after upload
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-required">
        <h2>Authentication Required</h2>
        <p>Please log in to view your papers.</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    );
  }

  return (
    <div className="papers-page">
      <div className="page-header">
        <h1>My Research Papers</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowUploadForm(!showUploadForm)}
        >
          {showUploadForm ? 'Cancel Upload' : 'Upload Paper'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {showUploadForm && (
        <div className="upload-section">
          <UploadPaperForm onSuccess={handleUploadSuccess} />
        </div>
      )}

      {loading ? (
        <div className="loader">Loading your papers...</div>
      ) : (
        <PaperList
          papers={papers}
          onDelete={fetchPapers}
          emptyMessage="You haven't uploaded any papers yet. Upload a paper to get started!"
        />
      )}
    </div>
  );
};

export default PapersPage;

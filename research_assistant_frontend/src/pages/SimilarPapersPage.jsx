// src/pages/SimilarPapersPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SimilarPapersUploadForm from '../components/similar/SimilarPapersUploadForm';
import SimilarPapersList from '../components/similar/SimilarPapersList';

import './SimilarPapersPage.css'; // Import your CSS styles
const SimilarPapersPage = () => {
  const { isAuthenticated } = useAuth();
  const [similarPapers, setSimilarPapers] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleResults = (results) => {
    console.log('API Response:', results); // ✅ Debugging API Response

    // Sanitize API results to ensure consistency
    const sanitizedResults = results.map((paper) => ({
      ...paper,
      authors: Array.isArray(paper.authors)
        ? paper.authors
        : typeof paper.authors === 'string'
        ? paper.authors.split(',').map((author) => author.trim())
        : [], // Fallback to empty array if undefined or invalid
      url: paper.url || '#', // Fallback if URL is missing
      title: paper.title || 'Untitled Paper',
      source: paper.source || 'Unknown Source',
      publication_date: paper.publication_date || 'N/A',
    }));

    setSimilarPapers(sanitizedResults);
    setHasSearched(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-required">
        <h2>Authentication Required</h2>
        <p>Please log in to find similar papers.</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    );
  }

  return (
    <div className="similar-papers-page">
      <div className="page-header">
        <h1>Find Similar Research Papers</h1>
        <Link to="/papers" className="btn btn-outline">
          Back to Your Papers
        </Link>
      </div>

      <SimilarPapersUploadForm onResults={handleResults} />

      {hasSearched && (
        <SimilarPapersList papers={similarPapers} />
      )}
    </div>
  );
};

export default SimilarPapersPage;

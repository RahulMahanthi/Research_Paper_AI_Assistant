import React from 'react';
import { Link } from 'react-router-dom';
import PaperCard from './PaperCard';
import './PaperList.css';

const PaperList = ({ papers, loading, error, onDelete, emptyMessage }) => {
  if (loading) {
    return <div className="loader">Loading papers...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!papers || papers.length === 0) {
    return (
      <div className="no-papers-message">
        <p>{emptyMessage || "You haven't uploaded any papers yet."}</p>
        <Link to="/papers/upload" className="btn btn-primary">
          Upload Your First Paper
        </Link>
      </div>
    );
  }

  return (
    <div className="paper-list">
      <h2>Your Research Papers</h2>
      <div className="paper-grid">
        {papers.map((paper) => (
          <PaperCard
            key={paper.id}
            paper={paper}
            onDelete={() => onDelete(paper.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaperList;

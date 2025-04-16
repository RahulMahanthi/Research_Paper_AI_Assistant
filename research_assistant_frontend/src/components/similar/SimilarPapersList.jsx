// src/components/similar/SimilarPapersList.jsx
import React from 'react';
import './SimilarPapersList.css';

const SimilarPapersList = ({ papers }) => {
  if (!papers || papers.length === 0) {
    return (
      <div className="no-results">
        <p>No similar papers found. Try uploading a different paper.</p>
      </div>
    );
  }

  return (
    <div className="similar-papers-list">
      <h2>Similar Research Papers</h2>

      <div className="papers-container">
        {papers.map((paper, index) => (
          <div key={index} className="similar-paper-card">
            <h3>{paper.title}</h3>

            <div className="paper-authors">
              <strong>Authors:</strong>{' '}
              {paper.authors && paper.authors.length > 0
                ? paper.authors.join(', ')
                : 'Unknown Authors'}
            </div>

            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Paper
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPapersList;

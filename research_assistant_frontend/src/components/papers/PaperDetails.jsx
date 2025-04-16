
// src/components/papers/PaperDetails.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PaperDetails.css';

const PaperDetails = ({ paper, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this paper?')) {
      const deleted = await onDelete(paper.id);
      if (deleted) {
        navigate('/papers');
      }
    }
  };

  if (!paper) {
    return <div className="loader">Loading paper details...</div>;
  }

  return (
    <div className="paper-details">
      <h1 className="paper-title">{paper.title || 'Untitled Paper'}</h1>
      
      <div className="paper-meta">
        <div className="paper-authors">
          <strong>Authors:</strong> {paper.authors && paper.authors.length > 0 
            ? paper.authors.join(', ')
            : 'Unknown Authors'}
        </div>
        <div className="paper-date">
          <strong>Uploaded on:</strong> {new Date(paper.created_at).toLocaleDateString()}
        </div>
      </div>
      
      <div className="paper-content">
        <h2>Abstract</h2>
        <div className="paper-abstract">
          {paper.abstract || 'No abstract available'}
        </div>
        
        <h2>Content</h2>
        <div className="paper-full-content">
          {paper.content && paper.content.length > 0 
            ? (
              <div>
                {paper.content.substring(0, 1000)}
                {paper.content.length > 1000 && '...'}
              </div>
            )
            : 'Full text content not available'}
        </div>
      </div>
      
      <div className="paper-actions">
        <Link to={`/chat/${paper.id}`} className="btn btn-primary">
          Chat with this Paper
        </Link>
        <Link to={`/similar/${paper.id}`} className="btn btn-secondary">
          Find Similar Papers
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Paper
        </button>
      </div>
    </div>
  );
};

export default PaperDetails;

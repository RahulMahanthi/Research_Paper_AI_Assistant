import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PaperCard.css';

const PaperCard = ({ paper, onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (confirmDelete) {
      onDelete(paper.id);
      setConfirmDelete(false);
    } else {
      setConfirmDelete(true);
    }
  };

  const cancelDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setConfirmDelete(false);
  };

  return (
    <div className="paper-card">
      <h3 className="paper-title">{paper.title || 'Untitled Paper'}</h3>
      
      <div className="paper-authors">
        {paper.authors && paper.authors.length > 0 
          ? paper.authors.join(', ')
          : 'Unknown Authors'}
      </div>
      
      {paper.abstract && (
        <div className="paper-abstract">
          {paper.abstract.length > 150 
            ? `${paper.abstract.substring(0, 150)}...` 
            : paper.abstract}
        </div>
      )}
      
      <div className="paper-meta">
        <span className="paper-date">
          Uploaded on {new Date(paper.created_at).toLocaleDateString()}
        </span>
      </div>
      
      <div className="paper-actions">
        <Link to={`/papers/${paper.id}`} className="btn btn-primary">
          View Details
        </Link>
        <Link to={`/chat/${paper.id}`} className="btn btn-secondary">
          Chat with Paper
        </Link>
        {confirmDelete ? (
          <div className="delete-confirmation">
            <button className="btn btn-danger" onClick={handleDelete}>
              Confirm
            </button>
            <button className="btn btn-secondary" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default PaperCard;

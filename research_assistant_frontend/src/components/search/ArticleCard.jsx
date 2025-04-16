// src/components/search/ArticleCard.jsx
import React from 'react';
import './ArticleCard.css';
const ArticleCard = ({ article }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getSourceIcon = (source) => {
    switch (source.toLowerCase()) {
      case 'arxiv':
        return '📝';
      case 'pubmed':
        return '🧬';
      case 'core':
        return '📚';
      default:
        return '📄';
    }
  };

  return (
    <div className="article-card">
      <div className="article-source">
        <span className="source-icon">{getSourceIcon(article.source)}</span>
        <span className="source-name">{article.source}</span>
      </div>
      
      <h3 className="article-title">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h3>
      
      <div className="article-meta">
        <span className="article-authors">{article.authors}</span>
        <span className="article-date">{formatDate(article.published_date)}</span>
      </div>
      
      <p className="article-abstract">{article.abstract}</p>
      
      <div className="article-actions">
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          View Original
        </a>
        <button className="btn btn-outline btn-sm">Save</button>
      </div>
    </div>
  );
};

export default ArticleCard;
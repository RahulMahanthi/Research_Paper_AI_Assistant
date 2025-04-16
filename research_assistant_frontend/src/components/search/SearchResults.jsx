// src/components/search/SearchResults.jsx
import React from 'react';
import ArticleCard from './ArticleCard';

import './SearchResults.css'; // Assuming you have a CSS file for styling
const SearchResults = ({ results, isLoading, error }) => {
  if (isLoading) {
    return <div className="search-loading">Loading results...</div>;
  }

  if (error) {
    return <div className="search-error">Error: {error}</div>;
  }

  if (results.length === 0) {
    return <div className="no-results">No articles found matching your criteria.</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results ({results.length})</h2>
      <div className="results-container">
        {results.map((article, index) => (
          <ArticleCard key={`${article.source}-${index}`} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
// src/components/search/SearchInfo.jsx
import React from 'react';

import './SearchInfo.css'; // Assuming you have a CSS file for styling
const SearchInfo = ({ sourceDescriptions }) => {
  return (
    <div className="search-info">
      <h3>About Our Research Sources</h3>
      <div className="sources-info">
        {Object.entries(sourceDescriptions).map(([source, description]) => (
          <div key={source} className="source-info-item">
            <h4>{source.charAt(0).toUpperCase() + source.slice(1)}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInfo;
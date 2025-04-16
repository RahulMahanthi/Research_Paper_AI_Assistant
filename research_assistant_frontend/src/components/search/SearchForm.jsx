// src/components/search/SearchForm.jsx
import React, { useState, useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';

import './SearchForm.css'; // Assuming you have a CSS file for styling
const SearchForm = ({ onSearch }) => {
  const { sources, fetchSources, isLoading } = useSearch();
  const [formData, setFormData] = useState({
    query: '',
    sources: [],
    max_results: 20,
    sort_by: 'relevance',
    date_from: '',
    date_to: '',
    full_text: false
  });
  const [sourceError, setSourceError] = useState('');

  useEffect(() => {
    fetchSources();
  }, []);

  useEffect(() => {
    if (sources.length > 0) {
      // Default to all sources selected
      setFormData(prev => ({
        ...prev,
        sources: [...sources]
      }));
    }
  }, [sources]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSourceToggle = (source) => {
    setFormData(prev => {
      const currentSources = [...prev.sources];
      const sourceIndex = currentSources.indexOf(source);
      
      if (sourceIndex >= 0) {
        // Only remove if it's not the last source
        if (currentSources.length > 1) {
          currentSources.splice(sourceIndex, 1);
          setSourceError('');
        } else {
          setSourceError('At least one source must be selected');
          return prev;
        }
      } else {
        currentSources.push(source);
        setSourceError('');
      }
      
      return {
        ...prev,
        sources: currentSources
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that at least one source is selected
    if (formData.sources.length === 0) {
      setSourceError('At least one source must be selected');
      return;
    }
    
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="query">Search Query</label>
        <input
          type="text"
          id="query"
          name="query"
          value={formData.query}
          onChange={handleInputChange}
          placeholder="Enter search terms..."
          required
        />
      </div>

      <div className="form-group">
        <label>Sources</label>
        <div className="sources-selection">
          {sources.map(source => (
            <label key={source} className="source-option">
              <input
                type="checkbox"
                checked={formData.sources.includes(source)}
                onChange={() => handleSourceToggle(source)}
              />
              {source.charAt(0).toUpperCase() + source.slice(1)}
            </label>
          ))}
        </div>
        {sourceError && <div className="error-message">{sourceError}</div>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="max_results">Max Results</label>
          <input
            type="number"
            id="max_results"
            name="max_results"
            value={formData.max_results}
            onChange={handleInputChange}
            min="1"
            max="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sort_by">Sort By</label>
          <select
            id="sort_by"
            name="sort_by"
            value={formData.sort_by}
            onChange={handleInputChange}
          >
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date_from">From Date</label>
          <input
            type="date"
            id="date_from"
            name="date_from"
            value={formData.date_from}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date_to">To Date</label>
          <input
            type="date"
            id="date_to"
            name="date_to"
            value={formData.date_to}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="full_text"
            checked={formData.full_text}
            onChange={handleInputChange}
          />
          Search in full text when available
        </label>
      </div>

      <button type="submit" className="btn btn-primary" disabled={isLoading || !formData.query || formData.sources.length === 0}>
        {isLoading ? 'Searching...' : 'Search Articles'}
      </button>
    </form>
  );
};

export default SearchForm;
// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';
import SearchForm from '../components/search/SearchForm';
import SearchResults from '../components/search/SearchResults';
import SearchInfo from '../components/search/SearchInfo';
import './SearchPage.css'; // Assuming you have a CSS file for styling
const SearchPage = () => {
  const { sourceDescriptions, searchResults, isLoading, error, fetchSources, performSearch } = useSearch();
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetchSources();
  }, []);

  const handleSearch = async (searchParams) => {
    await performSearch(searchParams);
    setHasSearched(true);
  };

  return (
    <div className="search-page">
      <div className="search-page-header">
        <h1>Research Article Search</h1>
        <p>Search across multiple academic databases for research papers</p>
      </div>

      <div className="search-page-content">
        <div className="search-panel">
          <SearchForm onSearch={handleSearch} />
          
          {!hasSearched && Object.keys(sourceDescriptions).length > 0 && (
            <SearchInfo sourceDescriptions={sourceDescriptions} />
          )}
        </div>

        <div className="results-panel">
          {hasSearched && (
            <SearchResults 
              results={searchResults} 
              isLoading={isLoading} 
              error={error} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
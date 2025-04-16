// src/hooks/useSearch.js
import { useState } from 'react';
import { getSearchSources, searchArticles } from '../api/search';

export const useSearch = () => {
  const [sources, setSources] = useState([]);
  const [sourceDescriptions, setSourceDescriptions] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSources = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getSearchSources();
      setSources(data.sources);
      setSourceDescriptions(data.descriptions);
    } catch (err) {
      setError(err.message || 'Failed to fetch sources');
    } finally {
      setIsLoading(false);
    }
  };

  const performSearch = async (searchParams) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const results = await searchArticles(searchParams);
      setSearchResults(results);
      return results;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || err.message || 'Search failed';
      setError(errorMessage);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sources,
    sourceDescriptions,
    searchResults,
    isLoading,
    error,
    fetchSources,
    performSearch
  };
};
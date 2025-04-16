// src/hooks/useAnalyzer.js
import { useState } from 'react';
import { analyzeDocument } from '../api/analyzer';

export const useAnalyzer = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const analyzeFile = async (file) => {
    setAnalyzing(true);
    setError(null);
    
    try {
      const result = await analyzeDocument(file);
      setAnalysis(result);
      return result;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to analyze document');
      throw err;
    } finally {
      setAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setAnalysis(null);
    setError(null);
  };

  return {
    analyzing,
    analysis,
    error,
    analyzeFile,
    resetAnalysis
  };
};
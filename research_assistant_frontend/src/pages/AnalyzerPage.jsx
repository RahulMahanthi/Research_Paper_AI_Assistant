// src/pages/AnalyzerPage.jsx
import React from 'react';
import { useAnalyzer } from '../hooks/useAnalyzer';
import AnalyzerUpload from '../components/analyzer/AnalyzerUpload';
import AnalysisResults from '../components/analyzer/AnalysisResults';
import Loader from '../components/common/Loader';
import './AnalyzerPage.css';

const AnalyzerPage = () => {
  const { analyzing, analysis, error, analyzeFile, resetAnalysis } = useAnalyzer();

  const handleUpload = async (file) => {
    try {
      await analyzeFile(file);
    } catch (err) {
      console.error('Analysis failed:', err);
    }
  };

  return (
    <div className="analyzer-page">
      {analyzing && (
        <div className="analyzing-overlay">
          <Loader />
          <p>Analyzing your document...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={resetAnalysis} className="btn btn-outline">
            Try Again
          </button>
        </div>
      )}

      {!analysis ? (
        <AnalyzerUpload onUpload={handleUpload} analyzing={analyzing} />
      ) : (
        <AnalysisResults analysis={analysis} onReset={resetAnalysis} />
      )}
    </div>
  );
};

export default AnalyzerPage;
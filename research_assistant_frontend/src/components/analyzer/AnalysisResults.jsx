// src/components/analyzer/AnalysisResults.jsx
import React from 'react';
import './AnalysisResults.css';

const AnalysisResults = ({ analysis, onReset }) => {
  if (!analysis) return null;

  return (
    <div className="analysis-results">
      <div className="analysis-header">
        <h2>Paper Analysis Results</h2>
        <button className="btn btn-outline" onClick={onReset}>
          Analyze Another Paper
        </button>
      </div>

      <div className="results-grid">
        <div className="result-card">
          <h3>Future Work</h3>
          <div className="bullet-points">
            {analysis.future_work.summary.map((point, index) => (
              <div key={`future-${index}`} className="bullet-point">
                <span className="bullet">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <details className="raw-text">
            <summary>View Full Text</summary>
            <div className="text-content">{analysis.future_work.raw_text}</div>
          </details>
        </div>

        <div className="result-card">
          <h3>Limitations</h3>
          <div className="bullet-points">
            {analysis.limitations.summary.map((point, index) => (
              <div key={`limitation-${index}`} className="bullet-point">
                <span className="bullet">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <details className="raw-text">
            <summary>View Full Text</summary>
            <div className="text-content">{analysis.limitations.raw_text}</div>
          </details>
        </div>

        <div className="result-card">
          <h3>Suggested Research Directions</h3>
          <div className="bullet-points">
            {analysis.suggested_research_directions.map((direction, index) => (
              <div key={`direction-${index}`} className="bullet-point">
                <span className="bullet">•</span>
                <span>{direction}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
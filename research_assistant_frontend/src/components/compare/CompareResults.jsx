import React from 'react';
import './CompareResults.css';

const CompareResults = ({ results }) => {
  if (!results || !results.comparison_results) {
    return <div className="compare-results-empty">No results available</div>;
  }
  
  const { 
    paper1_title, 
    paper2_title, 
    comparison_results 
  } = results;
  
  const { 
    vector_similarity, 
    section_similarities, 
    most_similar_pairs, 
    comparison_analysis 
  } = comparison_results;
  
  // Convert similarity score to percentage
  const overallSimilarity = Math.round(vector_similarity * 100);
  
  // Get color based on similarity value
  const getSimilarityColor = (value) => {
    const normalized = value * 100;
    if (normalized >= 80) return '#d32f2f'; // high similarity - red
    if (normalized >= 60) return '#ff9800'; // medium similarity - orange
    return '#4caf50'; // low similarity - green
  };
  
  return (
    <div className="compare-results">
      <h2>Comparison Results</h2>
      
      <div className="papers-info">
        <div className="paper-info">
          <h3>Paper 1</h3>
          <p>{paper1_title}</p>
        </div>
        <div className="similarity-indicator">
          <div 
            className="similarity-circle" 
            style={{ backgroundColor: getSimilarityColor(vector_similarity) }}
          >
            {overallSimilarity}%
          </div>
          <span>Overall Similarity</span>
        </div>
        <div className="paper-info">
          <h3>Paper 2</h3>
          <p>{paper2_title}</p>
        </div>
      </div>
      
      <h3>Section Similarities</h3>
      <div className="section-similarities">
        {Object.entries(section_similarities).map(([section, similarity]) => (
          <div key={section} className="section-similarity">
            <div className="section-name">{section}</div>
            <div className="similarity-bar-container">
              <div 
                className="similarity-bar" 
                style={{ 
                  width: `${similarity * 100}%`,
                  backgroundColor: getSimilarityColor(similarity)
                }}
              ></div>
              <span className="similarity-value">{Math.round(similarity * 100)}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <h3>Most Similar Passages</h3>
      <div className="similar-passages">
        {most_similar_pairs.map((pair, index) => (
          <div key={index} className="similar-pair">
            <div className="similarity-score">
              Similarity: {Math.round(pair.similarity * 100)}%
            </div>
            <div className="passages-container">
              <div className="passage paper1-passage">
                <h4>Paper 1</h4>
                <p>{pair.paper1_chunk}</p>
              </div>
              <div className="passage paper2-passage">
                <h4>Paper 2</h4>
                <p>{pair.paper2_chunk}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h3>Analysis</h3>
      <div className="comparison-analysis">
        {comparison_analysis}
      </div>
    </div>
  );
};

export default CompareResults;

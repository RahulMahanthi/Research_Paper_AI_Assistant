import React, { useState } from 'react';
import { useCompare } from '../hooks/useCompare';
import CompareUpload from '../components/compare/CompareUpload';
import CompareStatus from '../components/compare/CompareStatus';
import CompareResults from '../components/compare/CompareResults';
import './ComparePapersPage.css';

const ComparePapersPage = () => {
  const { 
    loading, 
    error, 
    taskId, 
    status, 
    comparisonResult, 
    startComparison, 
    checkComparisonStatus, 
    reset 
  } = useCompare();
  
  const handleSubmit = async (paper1, paper2) => {
    try {
      await startComparison(paper1, paper2);
    } catch (error) {
      console.error('Error starting comparison:', error);
    }
  };
  
  const handleReset = () => {
    reset();
  };
  
  return (
    <div className="compare-papers-page">
      <div className="page-header">
        <h1>Compare Research Papers</h1>
        <p>Upload two papers to analyze their similarities and differences</p>
      </div>
      
      {error && (
        <div className="error-container">
          <p>Error: {error}</p>
          <button className="btn btn-outline" onClick={handleReset}>
            Try Again
          </button>
        </div>
      )}
      
      {status === 'idle' && (
        <CompareUpload onSubmit={handleSubmit} />
      )}
      
      {(status === 'uploading' || status === 'processing') && taskId && (
        <CompareStatus 
          taskId={taskId} 
          onStatusCheck={checkComparisonStatus}
          status={status}
        />
      )}
      
      {status === 'completed' && comparisonResult && (
        <div className="results-container">
          <CompareResults results={comparisonResult} />
          <div className="action-buttons">
            <button className="btn btn-outline" onClick={handleReset}>
              Compare Different Papers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparePapersPage;
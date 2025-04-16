import React, { useEffect, useState } from 'react';
import './CompareStatus.css';

const CompareStatus = ({ taskId, onStatusCheck, status }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Check status immediately
    onStatusCheck(taskId);
    
    // Set up polling interval
    const interval = setInterval(() => {
      onStatusCheck(taskId);
    }, 5000); // Check every 5 seconds
    
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // Only increase up to 95% until we know it's done
        if (prev < 95) {
          return prev + 1;
        }
        return prev;
      });
    }, 500);
    
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [taskId, onStatusCheck]);
  
  // Set progress to 100% when completed
  useEffect(() => {
    if (status === 'completed') {
      setProgress(100);
    }
  }, [status]);

  return (
    <div className="compare-status">
      <h2>Analyzing Papers</h2>
      <p className="status-message">
        {status === 'uploading' && 'Uploading your papers...'}
        {status === 'processing' && 'Processing your papers. This may take a few minutes...'}
        {status === 'completed' && 'Analysis complete!'}
        {status === 'error' && 'An error occurred during analysis.'}
      </p>
      
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="task-id">
        Task ID: <span>{taskId}</span>
      </div>
    </div>
  );
};

export default CompareStatus;

import { useState } from 'react';
import { compareApi } from '../api/compare';

export const useCompare = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, uploading, processing, completed, error

  // Upload and initiate comparison
  const startComparison = async (paper1File, paper2File) => {
    try {
      setLoading(true);
      setError(null);
      setStatus('uploading');
      
      const result = await compareApi.uploadAndCompare(paper1File, paper2File);
      setTaskId(result.task_id);
      setStatus('processing');
      
      return result.task_id;
    } catch (err) {
      setError(err.message || 'Failed to start comparison');
      setStatus('error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Check status of comparison
  const checkComparisonStatus = async (taskId) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await compareApi.checkStatus(taskId || taskId);
      
      if (result.status === 'completed') {
        setComparisonResult(result);
        setStatus('completed');
      } else {
        setStatus('processing');
      }
      
      return result;
    } catch (err) {
      setError(err.message || 'Failed to check comparison status');
      setStatus('error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Poll for status until completion
  const pollComparisonStatus = async (taskId, interval = 5000, maxAttempts = 60) => {
    let attempts = 0;
    
    const poll = async () => {
      if (attempts >= maxAttempts) {
        setError('Comparison timed out');
        setStatus('error');
        return;
      }
      
      try {
        const result = await checkComparisonStatus(taskId);
        
        if (result.status === 'completed') {
          return result;
        } else {
          attempts++;
          setTimeout(poll, interval);
        }
      } catch (err) {
        setError(err.message || 'Failed during polling');
        setStatus('error');
      }
    };
    
    return poll();
  };

  return {
    loading,
    error,
    taskId,
    status,
    comparisonResult,
    startComparison,
    checkComparisonStatus,
    pollComparisonStatus,
    reset: () => {
      setTaskId(null);
      setComparisonResult(null);
      setStatus('idle');
      setError(null);
    }
  };
};

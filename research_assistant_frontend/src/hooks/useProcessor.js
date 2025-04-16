import { useState } from 'react';
import { processResearchPaper, getAudioFile } from '../api/processor';

export const useProcessor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [processingResult, setProcessingResult] = useState(null);

  const processPaper = async (file) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await processResearchPaper(file);
      setProcessingResult(result);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to process paper');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAudioUrl = (filename) => {
    return getAudioFile(filename);
  };

  return {
    processPaper,
    getAudioUrl,
    loading,
    error,
    processingResult,
  };
};
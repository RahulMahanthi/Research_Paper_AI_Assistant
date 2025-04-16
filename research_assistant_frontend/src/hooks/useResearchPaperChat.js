// src/hooks/useResearchPaperChat.js
import { useState } from 'react';
import { uploadPdf, askPdfQuestion, getPdfList } from '../api/researchPaperChat';

export const useResearchPaperChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [answer, setAnswer] = useState('');
  const [pdfList, setPdfList] = useState([]);

  const handleUploadPdf = async (file) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await uploadPdf(file);
      setPdfData(data);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to upload PDF');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleAskQuestion = async (pdfId, question) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await askPdfQuestion(pdfId, question);
      setAnswer(data.answer);
      return data.answer;
    } catch (err) {
      setError(err.message || 'Failed to get answer');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchPdfList = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getPdfList();
      setPdfList(data);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to fetch PDF list');
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    pdfData,
    answer,
    pdfList,
    handleUploadPdf,
    handleAskQuestion,
    fetchPdfList,
  };
};
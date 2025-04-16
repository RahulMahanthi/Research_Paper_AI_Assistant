// src/api/researchPaperChat.js
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Upload PDF document
export const uploadPdf = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(`${API_URL}/pdf/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to upload PDF' };
  }
};

// Ask a question about the PDF
export const askPdfQuestion = async (pdfId, question) => {
  try {
    const response = await axios.post(`${API_URL}/pdf/ask/`, {
      pdf_id: pdfId,
      question,
    });
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to get answer' };
  }
};

// Get list of uploaded PDFs
export const getPdfList = async () => {
  try {
    const response = await axios.get(`${API_URL}/pdf/active/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to get PDF list' };
  }
};
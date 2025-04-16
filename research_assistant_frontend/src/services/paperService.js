// src/services/paperService.js
import api from './api';

export const uploadPaper = async (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post('/papers/upload', formData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const listPapers = async (token) => {
  const response = await api.get('/papers/list', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getPaper = async (paperId, token) => {
  const response = await api.get(`/papers/${paperId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deletePaper = async (paperId, token) => {
  const response = await api.delete(`/papers/${paperId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return response.data;
};

// src/services/similarService.js
import api from './api';

export const findSimilarPapers = async (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post('/api/similar/find-similar-papers', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

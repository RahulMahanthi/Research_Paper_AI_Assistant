// src/services/chatService.js
import api from './api';

export const sendMessage = async (message, paperId, token) => {
  const response = await api.post('/chat/send', 
    { message, paper_id: paperId },
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};

export const getChatHistory = async (paperId, token) => {
  const response = await api.get(`/chat/history?paper_id=${paperId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return response.data;
};

// src/hooks/useChat.js
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';
import { sendMessage, getChatHistory } from '../services/chatService';

export const useChat = (paperId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  // ✅ Memoize fetchChatHistory to avoid re-creation on every render
  const fetchChatHistory = useCallback(async () => {
    if (!token || !paperId) return;

    setLoading(true);
    try {
      const history = await getChatHistory(paperId, token);
      setMessages(history);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch chat history');
      console.error('Error fetching chat history:', err);
    } finally {
      setLoading(false);
    }
  }, [token, paperId]);

  // ✅ Memoize sendChatMessage to prevent unnecessary re-creations
  const sendChatMessage = useCallback(
    async (messageText) => {
      if (!token || !paperId || !messageText.trim()) return null;

      setLoading(true);
      try {
        // Add user message to UI immediately
        const userMessage = {
          message: messageText,
          is_user: true,
        };
        setMessages((prev) => [...prev, userMessage]);

        // Send to API and wait for response
        const response = await sendMessage(messageText, paperId, token);

        // Add bot response to UI
        const botMessage = {
          message: response.message,
          is_user: false,
          context: response.context || [],
        };
        setMessages((prev) => [...prev, botMessage]);

        setError(null);
        return response;
      } catch (err) {
        setError(err.message || 'Failed to send message');
        console.error('Error sending message:', err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [token, paperId]
  );

  // ✅ Correctly configure useEffect to call fetchChatHistory only once
  useEffect(() => {
    if (token && paperId) {
      fetchChatHistory();
    }
  }, [token, paperId, fetchChatHistory]);

  return {
    messages,
    loading,
    error,
    sendMessage: sendChatMessage, // Updated reference
    fetchChatHistory,
  };
};

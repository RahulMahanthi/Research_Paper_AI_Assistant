import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

import './MessageList.css'; // Assuming you have a CSS file for styling
const MessageList = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0 && !loading) {
    return (
      <div className="empty-chat">
        <p>No messages yet. Start asking questions about this paper!</p>
        <p>Example questions you can ask:</p>
        <ul>
          <li>What are the main findings of this paper?</li>
          <li>Summarize the methodology used in this research.</li>
          <li>What are the limitations of this study?</li>
          <li>Explain the implications of this research.</li>
          <li>How does this paper compare to other research in the field?</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <ChatMessage 
          key={index} 
          message={msg} 
          isUser={msg.is_user} 
        />
      ))}
      
      {loading && (
        <div className="loading-message">
          <div className="bot-avatar">AI</div>
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;

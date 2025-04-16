// src/components/chat/ChatInput.jsx
import React, { useState } from 'react';
import './ChatInput.css';
const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question about this paper..."
        disabled={disabled}
        className="chat-input"
      />
      <button 
        type="submit" 
        className="send-button"
        disabled={!message.trim() || disabled}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;

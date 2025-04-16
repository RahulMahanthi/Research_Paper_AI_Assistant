// src/components/chat/ChatMessage.jsx
import React from 'react';

import './ChatMessage.css'; // Assuming you have a CSS file for styling
const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-avatar">
        {isUser ? (
          <div className="user-avatar">U</div>
        ) : (
          <div className="bot-avatar">AI</div>
        )}
      </div>
      <div className="message-content">
        <div className="message-text">{message.message}</div>
        
        {!isUser && message.context && message.context.length > 0 && (
          <div className="message-context">
            <h4>Source Context:</h4>
            {message.context.map((ctx, index) => (
              <div key={index} className="context-item">
                <blockquote>{ctx.text}</blockquote>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

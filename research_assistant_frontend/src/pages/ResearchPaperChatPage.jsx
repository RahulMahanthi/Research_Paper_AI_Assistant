// src/pages/ResearchPaperChatPage.jsx
import React from 'react';
import ResearchPaperChat from '../components/researchPaperChat/ResearchPaperChat';
import './ResearchPaperChatPage.css';

const ResearchPaperChatPage = () => {
  return (
    <div className="research-paper-chat-page">
      <div className="page-header">
        <h1>Research Paper Chat</h1>
        <p>Upload your research papers and ask questions about their content</p>
      </div>
      <ResearchPaperChat />
    </div>
  );
};

export default ResearchPaperChatPage;
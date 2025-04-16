// src/components/researchPaperChat/ResearchPaperChat.jsx
import React, { useState } from 'react';
import { useResearchPaperChat } from '../../hooks/useResearchPaperChat';
import './ResearchPaperChat.css';

const ResearchPaperChat = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [pdfId, setPdfId] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [currentPdfName, setCurrentPdfName] = useState('');
  
  const {
    loading,
    error,
    handleUploadPdf,
    handleAskQuestion,
  } = useResearchPaperChat();

  const handleFileChange = (e) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) return;

    const result = await handleUploadPdf(file);
    if (result) {
      setPdfId(result.pdf_id);
      setCurrentPdfName(file.name);
      setFile(null);
      // Reset chat history when new PDF is uploaded
      setChatHistory([]);
      // Reset file input
      e.target.reset();
    }
  };

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    if (!pdfId || !question.trim()) return;

    const currentQuestion = question.trim();
    setChatHistory([...chatHistory, { type: 'question', content: currentQuestion }]);
    setQuestion('');
    
    const answer = await handleAskQuestion(pdfId, currentQuestion);
    if (answer) {
      setChatHistory(prev => [...prev, { type: 'answer', content: answer }]);
    }
  };

  return (
    <div className="research-paper-chat">
      <div className="research-chat-container">
        <div className="upload-section">
          <h3>Upload Research Paper</h3>
          <form onSubmit={handleSubmitFile} className="upload-form">
            <div className="file-input-container">
              <label htmlFor="pdf-file" className="file-input-label">
                {file ? file.name : 'Choose PDF File'}
              </label>
              <input
                type="file"
                id="pdf-file"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-input"
              />
            </div>
            <button 
              type="submit" 
              className="upload-button" 
              disabled={!file || loading}
            >
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        
        <div className="research-chat-main">
          <div className="chat-header">
            {currentPdfName ? (
              <h2>Chat with: {currentPdfName}</h2>
            ) : (
              <h2>Upload a PDF to start chatting</h2>
            )}
          </div>
          
          <div className="chat-messages">
            {chatHistory.length > 0 ? (
              chatHistory.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.type}`}>
                  <div className="message-content">{msg.content}</div>
                </div>
              ))
            ) : (
              <div className="empty-chat">
                {currentPdfName ? (
                  <p>Start asking questions about this document</p>
                ) : (
                  <p>Upload a PDF to ask questions</p>
                )}
              </div>
            )}
            {loading && (
              <div className="chat-message answer loading">
                <div className="loading-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmitQuestion} className="question-form">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about this document..."
              disabled={!pdfId || loading}
              className="question-input"
            />
            <button 
              type="submit" 
              className="ask-button" 
              disabled={!pdfId || !question.trim() || loading}
            >
              Ask
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperChat;
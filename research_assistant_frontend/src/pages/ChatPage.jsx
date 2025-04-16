// src/pages/ChatPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { usePapers } from '../hooks/usePapers';
import { useChat } from '../hooks/useChat';
import MessageList from '../components/chat/MessageList';
import ChatInput from '../components/chat/ChatInput';
import './ChatPage.css';
const ChatPage = () => {
  const { paperId } = useParams();
  const { isAuthenticated } = useAuth();
  const { fetchPaperDetails } = usePapers();
  const { messages, loading, sendMessage, error } = useChat(paperId);
  const [paper, setPaper] = useState(null);
  const [paperLoading, setPaperLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadPaper = async () => {
      if (isAuthenticated && paperId && mounted) {
        setPaperLoading(true);
        const paperData = await fetchPaperDetails(paperId);
        if (mounted) {
          setPaper(paperData);
          setPaperLoading(false);
        }
      }
    };

    loadPaper();

    // Cleanup to avoid memory leaks
    return () => {
      mounted = false;
    };
  }, [isAuthenticated, paperId, fetchPaperDetails]);

  if (!isAuthenticated) {
    return (
      <div className="auth-required">
        <h2>Authentication Required</h2>
        <p>Please log in to chat with your papers.</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    );
  }

  if (paperLoading) {
    return <div className="loader">Loading paper details...</div>;
  }

  if (!paper) {
    return (
      <div className="paper-not-found">
        <h2>Paper Not Found</h2>
        <p>The requested paper could not be found.</p>
        <Link to="/papers" className="btn btn-primary">Back to Papers</Link>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h1>Chat with Paper: {paper.title}</h1>
        <div className="chat-paper-meta">
          <p>
            {paper.authors && paper.authors.length > 0
              ? paper.authors.join(', ')
              : 'Unknown Authors'}
          </p>
        </div>
        <Link to={`/papers/${paperId}`} className="btn btn-outline">
          Back to Paper Details
        </Link>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="chat-container">
        <MessageList messages={messages} loading={loading} />
        <ChatInput onSendMessage={sendMessage} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatPage;

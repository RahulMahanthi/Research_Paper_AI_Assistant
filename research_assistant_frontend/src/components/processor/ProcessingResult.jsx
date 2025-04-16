import React from 'react';
import { useProcessor } from '../../hooks/useProcessor';

const ProcessingResult = ({ result }) => {
  const { getAudioUrl } = useProcessor();
  
  if (!result) return null;

  return (
    <div className="processing-result">
      <h2>Processing Results</h2>
      
      <div className="result-section">
        <h3>Paper Information</h3>
        <div className="paper-info">
          <h4>{result.title}</h4>
          <p>Authors: {result.authors.join(', ')}</p>
        </div>
      </div>
      
      <div className="result-section">
        <h3>Summary</h3>
        <p>{result.summary}</p>
        
        {result.summary_audio_url && (
          <div className="audio-player">
            <h4>Summary Audio</h4>
            <audio controls src={getAudioUrl(result.summary_audio_url.split('/').pop())}>
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
      
      <div className="result-section">
        <h3>Topics</h3>
        <div className="topics-list">
          {result.topics.map((topic, index) => (
            <span key={index} className="topic-tag">{topic}</span>
          ))}
        </div>
      </div>
      
      {result.podcast_audio_url && (
        <div className="result-section">
          <h3>Podcast</h3>
          <div className="audio-player">
            <audio controls src={getAudioUrl(result.podcast_audio_url.split('/').pop())}>
              Your browser does not support the audio element.
            </audio>
          </div>
          
          <div className="podcast-script">
            <h4>Podcast Script</h4>
            <p>{result.podcast_script}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingResult;
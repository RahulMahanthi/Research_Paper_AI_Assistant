// src/pages/ResearchPaperTesterPage.jsx
import React from 'react';
import ResearchPaperTester from '../components/researchPaperChat/ResearchPaperTester';
import './ResearchPaperTesterPage.css';

const ResearchPaperTesterPage = () => {
  return (
    <div className="research-paper-tester-page">
      <div className="page-header">
        <h1>API Testing Tool</h1>
        <p>Test the PDF chat API before setting up Postman</p>
      </div>
      <ResearchPaperTester />
    </div>
  );
};

export default ResearchPaperTesterPage;
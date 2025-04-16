// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import './HomePage.css';

// const HomePage = () => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <h1>Research Assistant</h1>
//         <p className="hero-subtitle">
//           Chat with your research papers and find related literature
//         </p>
        
//         {isAuthenticated ? (
//           <div className="hero-actions">
//             <Link to="/papers" className="btn btn-primary btn-lg">
//               My Papers
//             </Link>
//             <Link to="/similar" className="btn btn-outline btn-lg">
//               Find Similar Papers
//             </Link>
//           </div>
//         ) : (
//           <div className="hero-actions">
//             <Link to="/register" className="btn btn-primary btn-lg">
//               Get Started
//             </Link>
//             <Link to="/login" className="btn btn-outline btn-lg">
//               Login
//             </Link>
//           </div>
//         )}
//       </section>
      
//       <section className="features-section">
//         <h2>Key Features</h2>
        
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">📚</div>
//             <h3>Upload Research Papers</h3>
//             <p>Upload your PDF research papers to analyze their content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">💬</div>
//             <h3>Chat with Papers</h3>
//             <p>Ask questions about your papers and get answers based on their content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">🔍</div>
//             <h3>Find Similar Papers</h3>
//             <p>Discover related research papers based on your uploaded content.</p>
//           </div>
//         </div>
//       </section>
      
//       <section className="how-it-works">
//         <h2>How It Works</h2>
        
//         <div className="steps">
//           <div className="step">
//             <div className="step-number">1</div>
//             <h3>Upload Your Papers</h3>
//             <p>Upload PDF research papers to your personal library.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">2</div>
//             <h3>Ask Questions</h3>
//             <p>Chat with your papers to understand their content better.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">3</div>
//             <h3>Find Similar Research</h3>
//             <p>Use our similarity search to discover related papers.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
// src/pages/HomePage.jsx (updated)







// src/pages/HomePage.jsx (update with Research Paper Chat links)
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import './HomePage.css';

// const HomePage = () => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <h1>Research Assistant</h1>
//         <p className="hero-subtitle">
//           Chat with your research papers and find related literature
//         </p>
        
//         {isAuthenticated ? (
//           <div className="hero-actions">
//             <Link to="/papers" className="btn btn-primary btn-lg">
//               My Papers
//             </Link>
//             <Link to="/analyzer" className="btn btn-outline btn-lg">
//               Analyze Paper
//             </Link>
//             <Link to="/compare" className="btn btn-outline btn-lg">
//               Compare Papers
//             </Link>
//             <Link to="/research-chat" className="btn btn-primary btn-lg">
//               Research Chat
//             </Link>
//           </div>
//         ) : (
//           <div className="hero-actions">
//             <Link to="/register" className="btn btn-primary btn-lg">
//               Get Started
//             </Link>
//             <Link to="/login" className="btn btn-outline btn-lg">
//               Login
//             </Link>
//           </div>
//         )}
//       </section>
      
//       <section className="features-section">
//         <h2>Key Features</h2>
        
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">📚</div>
//             <h3>Upload Research Papers</h3>
//             <p>Upload your PDF research papers to analyze their content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">💬</div>
//             <h3>Chat with Papers</h3>
//             <p>Ask questions about your papers and get answers based on their content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">🔍</div>
//             <h3>Find Similar Papers</h3>
//             <p>Discover related research papers based on your uploaded content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">📊</div>
//             <h3>Paper Analyzer</h3>
//             <p>Extract future work, limitations, and research directions from your papers.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">🔄</div>
//             <h3>Compare Papers</h3>
//             <p>Compare multiple research papers to identify similarities and differences.</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">🤖</div>
//             <h3>Research Assistant AI</h3>
//             <p>Use our AI to chat with any uploaded PDF document and get instant insights.</p>
//           </div>
//         </div>
//       </section>
      
//       <section className="how-it-works">
//         <h2>How It Works</h2>
        
//         <div className="steps">
//           <div className="step">
//             <div className="step-number">1</div>
//             <h3>Upload Your Papers</h3>
//             <p>Upload PDF research papers to your personal library.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">2</div>
//             <h3>Ask Questions</h3>
//             <p>Chat with your papers to understand their content better.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">3</div>
//             <h3>Analyze Research Gaps</h3>
//             <p>Use our analyzer to identify limitations and future work directions.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">4</div>
//             <h3>Find Similar Research</h3>
//             <p>Use our similarity search to discover related papers.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">5</div>
//             <h3>Compare Research Papers</h3>
//             <p>Use our comparison tool to analyze multiple papers side by side.</p>
//           </div>
//         </div>
//       </section>

//       <section className="postman-testing-section">
//         <h2>Test Our API</h2>
//         <p>You can test our PDF chat API directly in Postman or through our built-in testing tool.</p>
        
//         {isAuthenticated && (
//           <Link to="/research-tester" className="btn btn-outline btn-lg">
//             Try API Tester
//           </Link>
//         )}
        
//         <div className="testing-steps">
//           <div className="testing-step">
//             <h3>1. Set Up Postman Collection</h3>
//             <p>Create a new collection for the Research Assistant API in Postman.</p>
//           </div>
          
//           <div className="testing-step">
//             <h3>2. Test PDF Upload Endpoint</h3>
//             <p>POST to <code>http://localhost:8000/pdf/upload/</code> with your PDF file.</p>
//           </div>
          
//           <div className="testing-step">
//             <h3>3. Test Ask Question Endpoint</h3>
//             <p>POST to <code>http://localhost:8000/pdf/ask/</code> with your question and PDF ID.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import './HomePage.css';

// const HomePage = () => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <h1>Research Assistant</h1>
//         <p className="hero-subtitle">
//           Chat with your research papers and find related literature
//         </p>
        
//         {isAuthenticated ? (
//           <div className="hero-actions">
//             <Link to="/papers" className="btn btn-primary btn-lg">
//               My Papers
//             </Link>
//             <Link to="/analyzer" className="btn btn-outline btn-lg">
//               Analyze Paper
//             </Link>
//             <Link to="/compare" className="btn btn-outline btn-lg">
//               Compare Papers
//             </Link>
//             <Link to="/research-chat" className="btn btn-primary btn-lg">
//               Research Chat
//             </Link>
//             <Link to="/research-article" className="btn btn-outline btn-lg">
//               Research Articles
//             </Link>
//           </div>
//         ) : (
//           <div className="hero-actions">
//             <Link to="/register" className="btn btn-primary btn-lg">
//               Get Started
//             </Link>
//             <Link to="/login" className="btn btn-outline btn-lg">
//               Login
//             </Link>
//           </div>
//         )}
//       </section>
      
//       <section className="features-section">
//         <h2>Key Features</h2>
        
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">📚</div>
//             <h3>Upload Research Papers</h3>
//             <p>Upload your PDF research papers to analyze their content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">💬</div>
//             <h3>Chat with Papers</h3>
//             <p>Ask questions about your papers and get answers based on their content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">🔍</div>
//             <h3>Find Similar Papers</h3>
//             <p>Discover related research papers based on your uploaded content.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">📊</div>
//             <h3>Paper Analyzer</h3>
//             <p>Extract future work, limitations, and research directions from your papers.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">🔄</div>
//             <h3>Compare Papers</h3>
//             <p>Compare multiple research papers to identify similarities and differences.</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">🤖</div>
//             <h3>Research Assistant AI</h3>
//             <p>Use our AI to chat with any uploaded PDF document and get instant insights.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">📄</div>
//             <h3>Research Articles</h3>
//             <p>Explore curated research articles across various scientific domains.</p>
//           </div>
//         </div>
//       </section>
      
//       <section className="how-it-works">
//         <h2>How It Works</h2>
        
//         <div className="steps">
//           <div className="step">
//             <div className="step-number">1</div>
//             <h3>Upload Your Papers</h3>
//             <p>Upload PDF research papers to your personal library.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">2</div>
//             <h3>Ask Questions</h3>
//             <p>Chat with your papers to understand their content better.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">3</div>
//             <h3>Analyze Research Gaps</h3>
//             <p>Use our analyzer to identify limitations and future work directions.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">4</div>
//             <h3>Find Similar Research</h3>
//             <p>Use our similarity search to discover related papers.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">5</div>
//             <h3>Compare Research Papers</h3>
//             <p>Use our comparison tool to analyze multiple papers side by side.</p>
//           </div>
          
//           <div className="step">
//             <div className="step-number">6</div>
//             <h3>Browse Research Articles</h3>
//             <p>Access curated articles in computer science, life sciences, and more.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;



import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Research Assistant</h1>
        <p className="hero-subtitle">
          Chat with your research papers and find related literature
        </p>
        
        {isAuthenticated ? (
          <div className="hero-actions">
            <Link to="/papers" className="btn btn-primary btn-lg">
              My Papers
            </Link>
            <Link to="/analyzer" className="btn btn-outline btn-lg">
              Analyze Paper
            </Link>
            <Link to="/compare" className="btn btn-outline btn-lg">
              Compare Papers
            </Link>
            <Link to="/research-chat" className="btn btn-primary btn-lg">
              Research Chat
            </Link>
            <Link to="/research-article" className="btn btn-outline btn-lg">
              Research Articles
            </Link>
            <Link to="/processor" className="btn btn-primary btn-lg">
              Paper Processor
            </Link>
          </div>
        ) : (
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Login
            </Link>
          </div>
        )}
      </section>
      
      <section className="features-section">
        <h2>Key Features</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Upload Research Papers</h3>
            <p>Upload your PDF research papers to analyze their content.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Chat with Papers</h3>
            <p>Ask questions about your papers and get answers based on their content.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Find Similar Papers</h3>
            <p>Discover related research papers based on your uploaded content.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Paper Analyzer</h3>
            <p>Extract future work, limitations, and research directions from your papers.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Compare Papers</h3>
            <p>Compare multiple research papers to identify similarities and differences.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Research Assistant AI</h3>
            <p>Use our AI to chat with any uploaded PDF document and get instant insights.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Research Articles</h3>
            <p>Explore curated research articles across various scientific domains.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Paper to Podcast</h3>
            <p>Convert your research papers into audio summaries and podcast episodes.</p>
          </div>
        </div>
      </section>
      
      <section className="how-it-works">
        <h2>How It Works</h2>
        
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Upload Your Papers</h3>
            <p>Upload PDF research papers to your personal library.</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Ask Questions</h3>
            <p>Chat with your papers to understand their content better.</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Analyze Research Gaps</h3>
            <p>Use our analyzer to identify limitations and future work directions.</p>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <h3>Find Similar Research</h3>
            <p>Use our similarity search to discover related papers.</p>
          </div>
          
          <div className="step">
            <div className="step-number">5</div>
            <h3>Compare Research Papers</h3>
            <p>Use our comparison tool to analyze multiple papers side by side.</p>
          </div>
          
          <div className="step">
            <div className="step-number">6</div>
            <h3>Browse Research Articles</h3>
            <p>Access curated articles in computer science, life sciences, and more.</p>
          </div>
          
          <div className="step">
            <div className="step-number">7</div>
            <h3>Process Audio Content</h3>
            <p>Convert papers into audio summaries and podcast episodes for on-the-go learning.</p>
          </div>
        </div>
      </section>
      
      <section className="paper-processor-section">
        <h2>Paper Processor</h2>
        <p>Convert your research papers into audio format for on-the-go learning.</p>
        
        <div className="processor-features">
          <div className="processor-feature">
            <h3>Paper Summaries</h3>
            <p>Get concise audio summaries of your research papers.</p>
          </div>
          
          <div className="processor-feature">
            <h3>Topic Extraction</h3>
            <p>AI-powered topic extraction to categorize your research.</p>
          </div>
          
          <div className="processor-feature">
            <h3>Audio Podcasts</h3>
            <p>Listen to your papers as podcasts while commuting or exercising.</p>
          </div>
        </div>
        
        {isAuthenticated && (
          <Link to="/processor" className="btn btn-primary btn-lg">
            Try Paper Processor
          </Link>
        )}
      </section>
    </div>
  );
};

export default HomePage;
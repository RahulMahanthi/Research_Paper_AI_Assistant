// // src/App.jsx (updated)
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './hooks/useAuth';

// // Components
// import Navbar from './components/common/Navbar';
// import Sidebar from './components/common/Sidebar';

// // Pages
// import HomePage from './pages/HomePage';
// import AuthPage from './pages/AuthPage';
// import PapersPage from './pages/PapersPage';
// import PaperDetailPage from './pages/PaperDetailPage';
// import ChatPage from './pages/ChatPage';
// import SimilarPapersPage from './pages/SimilarPapersPage';
// import ProfilePage from './pages/ProfilePage';
// import AnalyzerPage from './pages/AnalyzerPage'; // Import the new page
// import NotFoundPage from './pages/NotFoundPage';

// const App = () => {
//   const { isAuthenticated, loading } = useAuth();

//   // Protected route component
//   const ProtectedRoute = ({ children }) => {
//     if (loading) return <div className="loader">Loading...</div>;
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };

//   return (
//     <div className="app-container">
//       <Navbar />
      
//       <div className="content-container">
//         {isAuthenticated && <Sidebar />}
        
//         <main className="main-content">
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<AuthPage type="login" />} />
//             <Route path="/register" element={<AuthPage type="register" />} />
            
//             {/* Protected routes */}
//             <Route path="/papers" element={
//               <ProtectedRoute>
//                 <PapersPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/papers/:paperId" element={
//               <ProtectedRoute>
//                 <PaperDetailPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/chat/:paperId" element={
//               <ProtectedRoute>
//                 <ChatPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/similar" element={
//               <ProtectedRoute>
//                 <SimilarPapersPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/analyzer" element={
//               <ProtectedRoute>
//                 <AnalyzerPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/profile" element={
//               <ProtectedRoute>
//                 <ProfilePage />
//               </ProtectedRoute>
//             } />
            
//             {/* Fallback route */}
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;




// src/App.jsx (updated with Compare Papers route)
// 



// src/App.jsx (update with new routes)




// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './hooks/useAuth';

// // Components
// import Navbar from './components/common/Navbar';
// import Sidebar from './components/common/Sidebar';

// // Pages
// import HomePage from './pages/HomePage';
// import AuthPage from './pages/AuthPage';
// import PapersPage from './pages/PapersPage';
// import PaperDetailPage from './pages/PaperDetailPage';
// import ChatPage from './pages/ChatPage';
// import SimilarPapersPage from './pages/SimilarPapersPage';
// import ProfilePage from './pages/ProfilePage';
// import AnalyzerPage from './pages/AnalyzerPage';
// import ComparePapersPage from './pages/ComparePapersPage';
// import ResearchPaperChatPage from './pages/ResearchPaperChatPage'; // Add this import
// import ResearchPaperTesterPage from './pages/ResearchPaperTesterPage'; // Add this import
// import NotFoundPage from './pages/NotFoundPage';

// const App = () => {
//   const { isAuthenticated, loading } = useAuth();

//   // Protected route component
//   const ProtectedRoute = ({ children }) => {
//     if (loading) return <div className="loader">Loading...</div>;
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };

//   return (
//     <div className="app-container">
//       <Navbar />

//       <div className="content-container">
//         {isAuthenticated && <Sidebar />}

//         <main className="main-content">
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<AuthPage type="login" />} />
//             <Route path="/register" element={<AuthPage type="register" />} />

//             {/* Protected routes */}
//             <Route path="/papers" element={
//               <ProtectedRoute>
//                 <PapersPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/papers/:paperId" element={
//               <ProtectedRoute>
//                 <PaperDetailPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/chat/:paperId" element={
//               <ProtectedRoute>
//                 <ChatPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/similar" element={
//               <ProtectedRoute>
//                 <SimilarPapersPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/analyzer" element={
//               <ProtectedRoute>
//                 <AnalyzerPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/compare" element={
//               <ProtectedRoute>
//                 <ComparePapersPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/profile" element={
//               <ProtectedRoute>
//                 <ProfilePage />
//               </ProtectedRoute>
//             } />
            
//             {/* New research paper chat routes */}
//             <Route path="/research-chat" element={
//               <ProtectedRoute>
//                 <ResearchPaperChatPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/research-tester" element={
//               <ProtectedRoute>
//                 <ResearchPaperTesterPage />
//               </ProtectedRoute>
//             } />

//             {/* Fallback route */}
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './hooks/useAuth';

// // Components
// import Navbar from './components/common/Navbar';
// import Sidebar from './components/common/Sidebar';

// // Pages
// import HomePage from './pages/HomePage';
// import AuthPage from './pages/AuthPage';
// import PapersPage from './pages/PapersPage';
// import PaperDetailPage from './pages/PaperDetailPage';
// import ChatPage from './pages/ChatPage';
// import SimilarPapersPage from './pages/SimilarPapersPage';
// import ProfilePage from './pages/ProfilePage';
// import AnalyzerPage from './pages/AnalyzerPage';
// import ComparePapersPage from './pages/ComparePapersPage';
// import ResearchPaperChatPage from './pages/ResearchPaperChatPage';
// import ResearchPaperTesterPage from './pages/ResearchPaperTesterPage';
// import SearchPage from './pages/SearchPage'; // Add this import
// import NotFoundPage from './pages/NotFoundPage';

// const App = () => {
//   const { isAuthenticated, loading } = useAuth();

//   // Protected route component
//   const ProtectedRoute = ({ children }) => {
//     if (loading) return <div className="loader">Loading...</div>;
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };

//   return (
//     <div className="app-container">
//       <Navbar />

//       <div className="content-container">
//         {isAuthenticated && <Sidebar />}

//         <main className="main-content">
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<AuthPage type="login" />} />
//             <Route path="/register" element={<AuthPage type="register" />} />

//             {/* Protected routes */}
//             <Route path="/papers" element={
//               <ProtectedRoute>
//                 <PapersPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/papers/:paperId" element={
//               <ProtectedRoute>
//                 <PaperDetailPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/chat/:paperId" element={
//               <ProtectedRoute>
//                 <ChatPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/similar" element={
//               <ProtectedRoute>
//                 <SimilarPapersPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/analyzer" element={
//               <ProtectedRoute>
//                 <AnalyzerPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/compare" element={
//               <ProtectedRoute>
//                 <ComparePapersPage />
//               </ProtectedRoute>
//             } />

//             <Route path="/profile" element={
//               <ProtectedRoute>
//                 <ProfilePage />
//               </ProtectedRoute>
//             } />
            
//             {/* Research paper chat routes */}
//             <Route path="/research-chat" element={
//               <ProtectedRoute>
//                 <ResearchPaperChatPage />
//               </ProtectedRoute>
//             } />
            
//             <Route path="/research-tester" element={
//               <ProtectedRoute>
//                 <ResearchPaperTesterPage />
//               </ProtectedRoute>
//             } />
            
//             {/* New search page route */}
//             <Route path="/search" element={
//               <ProtectedRoute>
//                 <SearchPage />
//               </ProtectedRoute>
//             } />

//             {/* Fallback route */}
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Components
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';

// Pages
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import PapersPage from './pages/PapersPage';
import PaperDetailPage from './pages/PaperDetailPage';
import ChatPage from './pages/ChatPage';
import SimilarPapersPage from './pages/SimilarPapersPage';
import ProfilePage from './pages/ProfilePage';
import AnalyzerPage from './pages/AnalyzerPage';
import ComparePapersPage from './pages/ComparePapersPage';
import ResearchPaperChatPage from './pages/ResearchPaperChatPage';
import ResearchPaperTesterPage from './pages/ResearchPaperTesterPage';
import SearchPage from './pages/SearchPage';
import PaperProcessorPage from './pages/PaperProcessorPage'; // Add this import
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const { isAuthenticated, loading } = useAuth();

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (loading) return <div className="loader">Loading...</div>;
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div className="app-container">
      <Navbar />

      <div className="content-container">
        {isAuthenticated && <Sidebar />}

        <main className="main-content">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />

            {/* Protected routes */}
            <Route path="/papers" element={
              <ProtectedRoute>
                <PapersPage />
              </ProtectedRoute>
            } />

            <Route path="/papers/:paperId" element={
              <ProtectedRoute>
                <PaperDetailPage />
              </ProtectedRoute>
            } />

            <Route path="/chat/:paperId" element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            } />

            <Route path="/similar" element={
              <ProtectedRoute>
                <SimilarPapersPage />
              </ProtectedRoute>
            } />

            <Route path="/analyzer" element={
              <ProtectedRoute>
                <AnalyzerPage />
              </ProtectedRoute>
            } />

            <Route path="/compare" element={
              <ProtectedRoute>
                <ComparePapersPage />
              </ProtectedRoute>
            } />

            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            
            {/* Research paper chat routes */}
            <Route path="/research-chat" element={
              <ProtectedRoute>
                <ResearchPaperChatPage />
              </ProtectedRoute>
            } />
            
            <Route path="/research-tester" element={
              <ProtectedRoute>
                <ResearchPaperTesterPage />
              </ProtectedRoute>
            } />
            
            {/* New search page route */}
            <Route path="/search" element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            } />
            
            {/* Paper processor route */}
            <Route path="/processor" element={
              <ProtectedRoute>
                <PaperProcessorPage />
              </ProtectedRoute>
            } />

            {/* Fallback route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
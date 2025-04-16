// // // src/components/common/Navbar.jsx (updated)
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../hooks/useAuth';
// // import './Navbar.css';

// // const Navbar = () => {
// //   const { isAuthenticated, user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login');
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-logo">
// //         <Link to="/">Research Assistant</Link>
// //       </div>
      
// //       <div className="navbar-links">
// //         <Link to="/" className="nav-link">Home</Link>
        
// //         {isAuthenticated ? (
// //           <>
// //             <Link to="/papers" className="nav-link">My Papers</Link>
// //             <Link to="/similar" className="nav-link">Find Similar</Link>
// //             <Link to="/analyzer" className="nav-link">Analyzer</Link>
            
// //             <div className="user-menu">
// //               <span className="user-name">{user?.name || 'User'}</span>
// //               <div className="dropdown-menu">
// //                 <Link to="/profile" className="dropdown-item">Profile</Link>
// //                 <button onClick={handleLogout} className="dropdown-item logout-btn">
// //                   Logout
// //                 </button>
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <div className="auth-links">
// //             <Link to="/login" className="nav-link">Login</Link>
// //             <Link to="/register" className="btn btn-primary">Register</Link>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;




// // src/components/common/Navbar.jsx (updated with Compare link)
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Navbar.css';

// const Navbar = () => {
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">Research Assistant</Link>
//       </div>
      
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
        
//         {isAuthenticated ? (
//           <>
//             <Link to="/papers" className="nav-link">My Papers</Link>
//             <Link to="/similar" className="nav-link">Find Similar</Link>
//             <Link to="/analyzer" className="nav-link">Analyzer</Link>
//             <Link to="/compare" className="nav-link">Compare Papers</Link>
            
//             <div className="user-menu">
//               <span className="user-name">{user?.name || 'User'}</span>
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">Profile</Link>
//                 <button onClick={handleLogout} className="dropdown-item logout-btn">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="auth-links">
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="btn btn-primary">Register</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/common/Navbar.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Navbar.css';

// const Navbar = () => {
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">Research Assistant</Link>
//       </div>
      
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
        
//         {isAuthenticated ? (
//           <>
//             <Link to="/similar" className="nav-link">Find Similar</Link>
//             <Link to="/analyzer" className="nav-link">Analyzer</Link>
//             <Link to="/compare" className="nav-link">Compare Papers</Link>
//             <Link to="/research-chat" className="nav-link">Research Chat</Link>
            
//             <div className="user-menu">
//               <span className="user-name">{user?.name || 'User'}</span>
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">Profile</Link>
//                 <button onClick={handleLogout} className="dropdown-item logout-btn">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="auth-links">
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="btn btn-primary">Register</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Navbar.css';

// const Navbar = () => {
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">Research Assistant</Link>
//       </div>
      
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
        
//         {isAuthenticated ? (
//           <>
//             <Link to="/search" className="nav-link">Search Articles</Link>
//             <Link to="/similar" className="nav-link">Find Similar</Link>
//             <Link to="/analyzer" className="nav-link">Analyzer</Link>
//             <Link to="/compare" className="nav-link">Compare Papers</Link>
//             <Link to="/research-chat" className="nav-link">Research Chat</Link>
            
//             <div className="user-menu">
//               <span className="user-name">{user?.name || 'User'}</span>
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">Profile</Link>
//                 <button onClick={handleLogout} className="dropdown-item logout-btn">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="auth-links">
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="btn btn-primary">Register</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Research Assistant</Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/search" className="nav-link">Search Articles</Link>
            <Link to="/similar" className="nav-link">Find Similar</Link>
            <Link to="/analyzer" className="nav-link">Analyzer</Link>
            <Link to="/compare" className="nav-link">Compare Papers</Link>
            <Link to="/research-chat" className="nav-link">Research Chat</Link>
            <Link to="/processor" className="nav-link">Paper Processor</Link>
            
            <div className="user-menu">
              <span className="user-name">{user?.name || 'User'}</span>
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
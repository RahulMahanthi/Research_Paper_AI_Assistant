// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Sidebar.css';

// const Sidebar = () => {
//   const { user } = useAuth();

//   return (
//     <aside className="sidebar">
//       {/* User Info Section */}
//       <div className="sidebar-user">
//         <div className="user-avatar">{user?.name?.charAt(0) || 'U'}</div>
//         <div className="user-info">
//           <h3>{user?.name || 'User'}</h3>
//           <p>{user?.email || ''}</p>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="sidebar-nav">
//         <ul className="nav-menu">
//           <li className="nav-item">
//             <NavLink to="/papers" className="nav-link">
//               <span className="nav-icon">📚</span>
//               <span className="nav-text">My Papers</span>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/similar" className="nav-link">
//               <span className="nav-icon">🔍</span>
//               <span className="nav-text">Find Similar</span>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/analyzer" className="nav-link">
//               <span className="nav-icon">📊</span>
//               <span className="nav-text">Paper Analyzer</span>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/compare" className="nav-link">
//               <span className="nav-icon">🔄</span>
//               <span className="nav-text">Compare Papers</span>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/profile" className="nav-link">
//               <span className="nav-icon">👤</span>
//               <span className="nav-text">Profile</span>
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       {/* Footer */}
//       <div className="sidebar-footer">
//         <p>© 2025 Research Assistant</p>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// src/components/common/Sidebar.jsx (update with Research Paper Chat links)
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Sidebar.css';

// const Sidebar = () => {
//   const { user } = useAuth();

//   return (
//     <aside className="sidebar">
//       {/* User Info Section */}
//       <div className="user-info">
//         <div className="user-avatar">
//           {user?.name?.charAt(0) || 'U'}
//         </div>
//         <div className="user-details">
//           <div className="user-name">
//             {user?.name || 'User'}
//           </div>
//           <div className="user-email">
//             {user?.email || ''}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="sidebar-nav">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <NavLink to="/papers" className="nav-link">
//               <span className="nav-icon">📚</span>
//               My Papers
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/similar" className="nav-link">
//               <span className="nav-icon">🔍</span>
//               Find Similar
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/analyzer" className="nav-link">
//               <span className="nav-icon">📊</span>
//               Paper Analyzer
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/compare" className="nav-link">
//               <span className="nav-icon">🔄</span>
//               Compare Papers
//             </NavLink>
//           </li>
          
//           <li className="nav-item">
//             <NavLink to="/research-chat" className="nav-link">
//               <span className="nav-icon">🤖</span>
//               Research Chat
//             </NavLink>
//           </li>
          
//           <li className="nav-item">
//             <NavLink to="/research-tester" className="nav-link">
//               <span className="nav-icon">🧪</span>
//               API Tester
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/profile" className="nav-link">
//               <span className="nav-icon">👤</span>
//               Profile
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       {/* Footer */}
//       <div className="sidebar-footer">
//         <div className="copyright">
//           © 2025 Research Assistant
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// src/components/common/Sidebar.jsx
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Sidebar.css';

// const Sidebar = () => {
//   const { user } = useAuth();

//   return (
//     <aside className="sidebar">
//       {/* User Info Section */}
//       <div className="user-info">
//         <div className="user-avatar">
//           {user?.name?.charAt(0) || 'U'}
//         </div>
//         <div className="user-details">
//           <div className="user-name">
//             {user?.name || 'User'}
//           </div>
//           <div className="user-email">
//             {user?.email || ''}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="sidebar-nav">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <NavLink to="/similar" className="nav-link">
//               <span className="nav-icon">🔍</span>
//               Find Similar
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/analyzer" className="nav-link">
//               <span className="nav-icon">📊</span>
//               Paper Analyzer
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/compare" className="nav-link">
//               <span className="nav-icon">🔄</span>
//               Compare Papers
//             </NavLink>
//           </li>
          
//           <li className="nav-item">
//             <NavLink to="/research-chat" className="nav-link">
//               <span className="nav-icon">🤖</span>
//               Research Chat
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/profile" className="nav-link">
//               <span className="nav-icon">👤</span>
//               Profile
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       {/* Footer */}
//       <div className="sidebar-footer">
//         <div className="copyright">
//           © 2025 Research Assistant
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './Sidebar.css';

// const Sidebar = () => {
//   const { user } = useAuth();

//   return (
//     <aside className="sidebar">
//       {/* User Info Section */}
//       <div className="user-info">
//         <div className="user-avatar">
//           {user?.name?.charAt(0) || 'U'}
//         </div>
//         <div className="user-details">
//           <div className="user-name">
//             {user?.name || 'User'}
//           </div>
//           <div className="user-email">
//             {user?.email || ''}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="sidebar-nav">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <NavLink to="/search" className="nav-link">
//               <span className="nav-icon">🔎</span>
//               Search Articles
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/similar" className="nav-link">
//               <span className="nav-icon">🔍</span>
//               Find Similar
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/analyzer" className="nav-link">
//               <span className="nav-icon">📊</span>
//               Paper Analyzer
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/compare" className="nav-link">
//               <span className="nav-icon">🔄</span>
//               Compare Papers
//             </NavLink>
//           </li>
          
//           <li className="nav-item">
//             <NavLink to="/research-chat" className="nav-link">
//               <span className="nav-icon">🤖</span>
//               Research Chat
//             </NavLink>
//           </li>
          

//           <li className="nav-item">
//             <NavLink to="/profile" className="nav-link">
//               <span className="nav-icon">👤</span>
//               Profile
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       {/* Footer */}
//       <div className="sidebar-footer">
//         <div className="copyright">
//           © 2025 Research Assistant
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      {/* User Info Section */}
      <div className="user-info">
        <div className="user-avatar">
          {user?.name?.charAt(0) || 'U'}
        </div>
        <div className="user-details">
          <div className="user-name">
            {user?.name || 'User'}
          </div>
          <div className="user-email">
            {user?.email || ''}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/search" className="nav-link">
              <span className="nav-icon">🔎</span>
              Search Articles
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/similar" className="nav-link">
              <span className="nav-icon">🔍</span>
              Find Similar
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/analyzer" className="nav-link">
              <span className="nav-icon">📊</span>
              Paper Analyzer
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/compare" className="nav-link">
              <span className="nav-icon">🔄</span>
              Compare Papers
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to="/research-chat" className="nav-link">
              <span className="nav-icon">🤖</span>
              Research Chat
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to="/processor" className="nav-link">
              <span className="nav-icon">🎧</span>
              Paper Processor
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              <span className="nav-icon">👤</span>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="copyright">
          © 2025 Research Assistant
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
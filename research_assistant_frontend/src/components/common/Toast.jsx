// src/components/common/Toast.jsx
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Toast = () => {
  const { toast, hideToast } = useContext(AppContext);
  
  if (!toast.show) return null;
  
  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500'
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`${bgColor[toast.type]} text-white px-6 py-4 rounded-md shadow-lg flex items-center`}>
        <span className="mr-2">
          {toast.type === 'success' && '✓'}
          {toast.type === 'error' && '✗'}
          {toast.type === 'info' && 'ℹ'}
          {toast.type === 'warning' && '⚠'}
        </span>
        <p>{toast.message}</p>
        <button
          onClick={hideToast}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;


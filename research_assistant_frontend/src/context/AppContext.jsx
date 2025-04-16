// src/context/AppContext.jsx
import React, { createContext, useReducer, useCallback } from 'react';

const initialState = {
  toast: { show: false, message: '', type: 'info' },
  loading: false
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SHOW_TOAST':
      return { ...state, toast: { ...action.payload, show: true } };
    case 'HIDE_TOAST':
      return { ...state, toast: { ...state.toast, show: false } };
    default:
      return state;
  }
}

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const showToast = useCallback((message, type = 'info') => {
    dispatch({ type: 'SHOW_TOAST', payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: 'HIDE_TOAST' });
    }, 3000);
  }, []);

  const setLoading = useCallback((isLoading) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  }, []);

  return (
    <AppContext.Provider value={{ 
      ...state, 
      showToast, 
      setLoading 
    }}>
      {children}
    </AppContext.Provider>
  );
};

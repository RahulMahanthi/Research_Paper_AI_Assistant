// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { login, register, checkAuth } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const userData = await checkAuth(token);
          setUser(userData);
        } catch (err) {
          localStorage.removeItem('token');
          setToken(null);
          setError('Authentication failed. Please login again.');
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, [token]);

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const { access_token, user: userData } = await login(email, password);
      localStorage.setItem('token', access_token);
      setToken(access_token);
      setUser(userData);
      setError(null);
      return { success: true };
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (userData) => {
    setLoading(true);
    try {
      const newUser = await register(userData);
      return { success: true, user: newUser };
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        loginUser,
        registerUser,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

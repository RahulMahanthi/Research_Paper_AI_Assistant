import { useState, useCallback } from 'react';
import api from '../services/api';
import { useAuth } from './useAuth';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const request = useCallback(async (method, url, data = null, config = {}) => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...config.headers,
      };

      const requestConfig = {
        ...config,
        headers,
      };

      let response;
      
      switch (method.toLowerCase()) {
        case 'get':
          response = await api.get(url, requestConfig);
          break;
        case 'post':
          response = await api.post(url, data, requestConfig);
          break;
        case 'put':
          response = await api.put(url, data, requestConfig);
          break;
        case 'delete':
          response = await api.delete(url, requestConfig);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      return response.data;
    } catch (err) {
      const errorMessage = 
        err.response?.data?.detail || 
        err.response?.data?.message || 
        err.message || 
        'An unexpected error occurred';
      
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [token]);

  const get = useCallback((url, config = {}) => {
    return request('get', url, null, config);
  }, [request]);

  const post = useCallback((url, data = {}, config = {}) => {
    return request('post', url, data, config);
  }, [request]);

  const put = useCallback((url, data = {}, config = {}) => {
    return request('put', url, data, config);
  }, [request]);

  const del = useCallback((url, config = {}) => {
    return request('delete', url, null, config);
  }, [request]);

  // Custom file upload method that uses FormData
  const uploadFile = useCallback(async (url, file, fieldName = 'file', additionalData = {}, config = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append(fieldName, file);
      
      // Add any additional data to the form
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      const headers = {
        ...(token && { Authorization: `Bearer ${token}` }),
        'Content-Type': 'multipart/form-data',
        ...config.headers,
      };
      
      const response = await api.post(url, formData, {
        ...config,
        headers,
      });
      
      return response.data;
    } catch (err) {
      const errorMessage = 
        err.response?.data?.detail || 
        err.response?.data?.message || 
        err.message || 
        'An unexpected error occurred during file upload';
      
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [token]);

  return {
    loading,
    error,
    request,
    get,
    post,
    put,
    delete: del, // 'delete' is a reserved keyword, so we use 'del' internally
    uploadFile,
    clearError: () => setError(null),
  };
};

export default useApi;
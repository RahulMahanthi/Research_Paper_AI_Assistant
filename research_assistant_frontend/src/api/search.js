// src/api/search.js
import axios from '../services/api';

export const getSearchSources = async () => {
  try {
    const response = await axios.get('/search/sources');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchArticles = async (searchParams) => {
  try {
    const response = await axios.post('/search', searchParams);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// src/utils/helpers.js
/**
 * Collection of helper functions used throughout the application
 */

/**
 * Parse JWT token and extract user information
 * @param {string} token - JWT token
 * @returns {object|null} Parsed token payload or null if invalid
 */
export const parseJwt = (token) => {
    if (!token) return null;
    
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join('')
      );
      
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error parsing JWT:', error);
      return null;
    }
  };
  
  /**
   * Check if a token is expired
   * @param {string} token - JWT token
   * @returns {boolean} True if token is expired or invalid
   */
  export const isTokenExpired = (token) => {
    const payload = parseJwt(token);
    if (!payload || !payload.exp) return true;
    
    const expirationTime = payload.exp * 1000; // Convert to milliseconds
    return Date.now() >= expirationTime;
  };
  
  /**
   * Generate a unique ID (for temporary client-side use)
   * @returns {string} Unique ID
   */
  export const generateClientId = () => {
    return `temp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  };
  
  /**
   * Debounce a function to limit how often it's called
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  export const debounce = (func, wait = 300) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  /**
   * Create a downloadable link for a blob
   * @param {Blob} blob - Data blob
   * @param {string} filename - Suggested filename
   */
  export const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up by revoking the object URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };
  
  /**
   * Get file extension from filename
   * @param {string} filename - Name of the file
   * @returns {string} File extension (without the dot)
   */
  export const getFileExtension = (filename) => {
    if (!filename) return '';
    return filename.split('.').pop().toLowerCase();
  };
  
  /**
   * Convert a string to title case
   * @param {string} str - String to convert
   * @returns {string} Title cased string
   */
  export const toTitleCase = (str) => {
    if (!str) return '';
    
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };
  
  /**
   * Check if string contains another string (case insensitive)
   * @param {string} text - Text to search in
   * @param {string} search - Text to search for
   * @returns {boolean} True if contains
   */
  export const containsText = (text, search) => {
    if (!text || !search) return false;
    
    return text.toLowerCase().includes(search.toLowerCase());
  };
  
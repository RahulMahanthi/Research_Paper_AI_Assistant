// src/utils/formatters.js
/**
 * Collection of formatting utilities for displaying data consistently
 */

/**
 * Format a date string into a more readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  /**
   * Truncate text to a specific length with ellipsis
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length before truncating
   * @returns {string} Truncated text
   */
  export const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    
    return `${text.substring(0, maxLength).trim()}...`;
  };
  
  /**
   * Format file size from bytes to human-readable format
   * @param {number} bytes - Size in bytes
   * @returns {string} Formatted size (e.g., "2.5 MB")
   */
  export const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 Bytes';
    
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
  };
  
  /**
   * Format author list to display nicely
   * @param {Array} authors - Array of author names
   * @returns {string} Formatted author list
   */
  export const formatAuthors = (authors) => {
    if (!authors || !authors.length) return 'Unknown';
    
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    
    return `${authors[0]}, ${authors[1]}, et al.`;
  };
  
  
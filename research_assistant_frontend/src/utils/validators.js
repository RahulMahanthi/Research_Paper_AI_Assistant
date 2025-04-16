// src/utils/validators.js
/**
 * Collection of validation utilities
 */

/**
 * Check if a string is a valid email
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
    if (!email) return false;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Check if a password meets minimum requirements
   * @param {string} password - Password to validate
   * @returns {object} Validation result with status and message
   */
  export const validatePassword = (password) => {
    if (!password) {
      return { isValid: false, message: 'Password is required' };
    }
    
    if (password.length < 8) {
      return { isValid: false, message: 'Password must be at least 8 characters' };
    }
    
    // Check for a mix of letters and numbers
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    if (!hasLetter || !hasNumber) {
      return { 
        isValid: false, 
        message: 'Password must contain both letters and numbers' 
      };
    }
    
    return { isValid: true, message: '' };
  };
  
  /**
   * Validate a PDF file
   * @param {File} file - File object to validate
   * @returns {object} Validation result with status and message
   */
  export const validatePdfFile = (file) => {
    if (!file) {
      return { isValid: false, message: 'No file selected' };
    }
    
    // Check file type
    if (file.type !== 'application/pdf') {
      return { isValid: false, message: 'Only PDF files are supported' };
    }
    
    // Check file size (max 20MB)
    const maxSizeInBytes = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSizeInBytes) {
      return { 
        isValid: false, 
        message: 'File is too large. Maximum size is 20MB' 
      };
    }
    
    return { isValid: true, message: '' };
  };
  
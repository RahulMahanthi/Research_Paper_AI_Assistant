

// API functions for paper processing
const API_URL = 'http://127.0.0.1:8000';

// API functions for paper processing

export const processResearchPaper = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/processor/process-paper`, {
      method: 'POST',
      body: formData,
      // Include auth headers if needed
      headers: {
        // Remove content-type so browser can set it with boundary parameter
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error processing paper:', error);
    throw error;
  }
};

export const getAudioFile = (filename) => {
  return `${API_URL}/processor/audio/${filename}`;
};
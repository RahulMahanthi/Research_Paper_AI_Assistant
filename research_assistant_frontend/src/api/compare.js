import axios from '../services/api';

export const compareApi = {
  // Upload and compare two papers
  uploadAndCompare: async (paper1File, paper2File) => {
    const formData = new FormData();
    formData.append('paper1', paper1File);
    formData.append('paper2', paper2File);

    const response = await axios.post('/comparison/upload-compare', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    return response.data;
  },

  // Check comparison status
  checkStatus: async (taskId) => {
    const response = await axios.get(`/comparison/status/${taskId}`);
    return response.data;
  }
};

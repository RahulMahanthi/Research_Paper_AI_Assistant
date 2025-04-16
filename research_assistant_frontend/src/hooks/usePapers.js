// // src/hooks/usePapers.js
// import { useState, useEffect } from 'react';
// import { useAuth } from './useAuth';
// import { listPapers, getPaper, uploadPaper, deletePaper } from '../services/paperService';

// export const usePapers = () => {
//   const [papers, setPapers] = useState([]);
//   const [currentPaper, setCurrentPaper] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { token } = useAuth();

//   const fetchPapers = async () => {
//     if (!token) return;
    
//     setLoading(true);
//     try {
//       const data = await listPapers(token);
//       setPapers(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch papers');
//       console.error('Error fetching papers:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPaperDetails = async (paperId) => {
//     if (!token || !paperId) return;
    
//     setLoading(true);
//     try {
//       const data = await getPaper(paperId, token);
//       setCurrentPaper(data);
//       setError(null);
//       return data;
//     } catch (err) {
//       setError(err.message || 'Failed to fetch paper details');
//       console.error('Error fetching paper details:', err);
//       return null;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const uploadNewPaper = async (file) => {
//     if (!token || !file) return null;
    
//     setLoading(true);
//     try {
//       const data = await uploadPaper(file, token);
//       setPapers((prevPapers) => [data, ...prevPapers]);
//       setError(null);
//       return data;
//     } catch (err) {
//       setError(err.message || 'Failed to upload paper');
//       console.error('Error uploading paper:', err);
//       return null;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removePaper = async (paperId) => {
//     if (!token || !paperId) return false;
    
//     setLoading(true);
//     try {
//       await deletePaper(paperId, token);
//       setPapers((prevPapers) => prevPapers.filter(paper => paper.id !== paperId));
//       if (currentPaper && currentPaper.id === paperId) {
//         setCurrentPaper(null);
//       }
//       setError(null);
//       return true;
//     } catch (err) {
//       setError(err.message || 'Failed to delete paper');
//       console.error('Error deleting paper:', err);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       if (!loading) {
//         fetchPapers();
//       }
//     }
//   }, [token]);
  

//   return {
//     papers,
//     currentPaper,
//     loading,
//     error,
//     fetchPapers,
//     fetchPaperDetails,
//     uploadPaper: uploadNewPaper,
//     deletePaper: removePaper,
//   };
// };
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';
import { listPapers, getPaper, uploadPaper, deletePaper } from '../services/paperService';

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [currentPaper, setCurrentPaper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  // ✅ Memoize fetchPapers using useCallback to prevent unnecessary recreation
  const fetchPapers = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    try {
      const data = await listPapers(token);
      setPapers(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch papers');
      console.error('Error fetching papers:', err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  // ✅ Memoize fetchPaperDetails using useCallback
  const fetchPaperDetails = useCallback(async (paperId) => {
    if (!token || !paperId) return;

    setLoading(true);
    try {
      const data = await getPaper(paperId, token);
      setCurrentPaper(data);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to fetch paper details');
      console.error('Error fetching paper details:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [token]);

  const uploadNewPaper = async (file) => {
    if (!token || !file) return null;

    setLoading(true);
    try {
      const data = await uploadPaper(file, token);
      setPapers((prevPapers) => [data, ...prevPapers]);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to upload paper');
      console.error('Error uploading paper:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const removePaper = async (paperId) => {
    if (!token || !paperId) return false;

    setLoading(true);
    try {
      await deletePaper(paperId, token);
      setPapers((prevPapers) => prevPapers.filter((paper) => paper.id !== paperId));
      if (currentPaper && currentPaper.id === paperId) {
        setCurrentPaper(null);
      }
      setError(null);
      return true;
    } catch (err) {
      setError(err.message || 'Failed to delete paper');
      console.error('Error deleting paper:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ UseEffect with correct dependencies
  useEffect(() => {
    if (token) {
      fetchPapers();
    }
  }, [token, fetchPapers]);

  return {
    papers,
    currentPaper,
    loading,
    error,
    fetchPapers,
    fetchPaperDetails,
    uploadPaper: uploadNewPaper,
    deletePaper: removePaper,
  };
};

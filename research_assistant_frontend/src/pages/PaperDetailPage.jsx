// src/pages/PaperDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePapers } from '../hooks/usePapers';
import PaperDetails from '../components/papers/PaperDetails';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';

const PaperDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPaperById, deletePaper, loading, error } = usePapers();
  const [paper, setPaper] = useState(null);

  useEffect(() => {
    const fetchPaper = async () => {
      const fetchedPaper = await getPaperById(id);
      setPaper(fetchedPaper);
    };

    fetchPaper();
  }, [id, getPaperById]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this paper?')) {
      await deletePaper(id);
      navigate('/papers');
    }
  };

  const handleChatClick = () => {
    navigate(`/chat/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!paper) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          Paper not found
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/papers')}
        >
          ← Back to Papers
        </Button>
        <div className="flex space-x-4">
          <Button onClick={handleChatClick}>
            Chat About This Paper
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Paper
          </Button>
        </div>
      </div>

      <PaperDetails paper={paper} />
    </div>
  );
};

export default PaperDetailPage;

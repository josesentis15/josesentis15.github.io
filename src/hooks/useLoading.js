import { useEffect, useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => setLoading(false), 2400);
  }, []);

  return {
    loading,
    showLoader
  };
};

export default useLoading;

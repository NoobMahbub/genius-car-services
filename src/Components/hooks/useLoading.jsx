import { useState, useEffect } from 'react';

const useLoading = () => {
  const [Loading, setLoading] = useState(true);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
   

    // Check if the page has already loaded
    
    setLoading(false);
  }, []);
    return [Loading, setLoading];
  };

export default useLoading;
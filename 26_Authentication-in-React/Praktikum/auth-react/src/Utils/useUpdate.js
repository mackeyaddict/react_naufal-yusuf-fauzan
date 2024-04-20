import { useState } from 'react';
import axios from 'axios';

const useUpdate = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateData = async (url, newData) => {
    setIsUpdating(true);

    try {
      await axios.put(`${import.meta.env.VITE_API_PRODUCT}${url}`, newData);
      setIsUpdating(false);
    } catch (error) {
      console.error('Update error:', error);
      setIsUpdating(false);
      throw error; // Propagate the error to the caller
    }
  };

  return { updateData, isUpdating };
};

export default useUpdate;

import { useState } from 'react';
import axios from 'axios';

const useDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteData = async (url) => {
    setIsDeleting(true);

    try {
      await axios.delete(`${import.meta.env.VITE_API_PRODUCT}${url}`);
      setIsDeleting(false);
    } catch (error) {
      console.error('Delete error:', error);
      setIsDeleting(false);
      throw error;
    }
  };

  return { deleteData, isDeleting };
};

export default useDelete;

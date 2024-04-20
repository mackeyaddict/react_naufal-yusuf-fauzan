import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [isPosting, setIsPosting] = useState(false);

  const post = async (url, formData) => {
    setIsPosting(true);

    try {
      const { data: responseData } = await axios.post(`${import.meta.env.VITE_API_PRODUCT}${url}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsPosting(false);
      return responseData.data;
    } catch (error) {
      console.error("Post error:", error);
      setIsPosting(false);
      throw error; 
    }
  };

  return { post, isPosting };
};

export default usePost;

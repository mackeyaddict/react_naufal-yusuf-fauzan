import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFormData } from "../store/slice/form.slice";

export const useFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, isLoadingSet] = useState(false);

  async function fetcher(url) {
    try {
      isLoadingSet(true);

      const { data: dataRes } = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_API_PRODUCT,
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(getFormData(dataRes));

      isLoadingSet(false);
    } catch (error) {
      console.log(error);
      isLoadingSet(false);
    }
  }

  return { fetcher, isLoading };
};

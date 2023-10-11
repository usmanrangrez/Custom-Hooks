import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get(url);
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

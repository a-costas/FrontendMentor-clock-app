import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchURL = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => setLoading(false));
    };
    fetchURL();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

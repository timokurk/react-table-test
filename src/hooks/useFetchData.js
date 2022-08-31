import { useState, useEffect } from "react";

export default function useFetchData(id) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      if (error) setError(null);
      try {
        setData([]);
        const request = await fetch(`/data/${id}`);
        const response = await request.json();
        setData(response);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [id, error]);
  return [data, error];
}

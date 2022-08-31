import { useState, useEffect } from "react";

// Hookki hakee mockkidatan json-serveriltä (db.json filu) ja käyttää useEffectiä async datan vuoksi jotta pystyy komponentissa suoraan käytellä ilman awaitteja

export function useFetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      if (error) setError(null);
      try {
        setData([]);
        const request = await fetch(`/data`);
        const response = await request.json();
        setData(response);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [error]);
  return { data, error };
}

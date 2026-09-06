import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [data, seData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error while fetching data");
        }
        const result = await response.json();
        seData(result);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

import { useState } from "react";
import { fetchNpmMetrics } from "../api/npmApi";

export function useNpmMetrics() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  const getMetrics = async (packageName) => {
  setError(null);

  try {
    const result = await fetchNpmMetrics(packageName);
    setData(result);
  } catch (err) {
    setError(err.message);
  } 
};

  return { data, error, getMetrics };
}
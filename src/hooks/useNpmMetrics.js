import { useState, useRef } from "react";
import { fetchNpmMetrics } from "../api/npmApi";

export function useNpmMetrics() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const controllerRef = useRef(null);

  const getMetrics = async (packageName) => {
  setLoading(true);
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
import { useState } from "react";
import { useNpmMetrics } from "./hooks/useNpmMetrics";
import MetricsCard from "./components/MetricsCard";

export default function App() {
  const [input, setInput] = useState("");
  const { data, error, getMetrics } = useNpmMetrics();

  const handleSubmit = (e) => {
    e.preventDefault();
    getMetrics(input.trim());
  };

  return (
    <div>
      <h1>NPM Metrics</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter package name"
          style={{ padding: 8 }}
        />
        <button type="submit" style={{ marginLeft: 10, padding: 8 }}>
          Fetch
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
      <MetricsCard data={data} />
    </div>
  );
}
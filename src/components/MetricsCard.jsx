export default function MetricsCard({ data }) {
  if (!data) return null;

  return (
    <div>
      <p><strong>Version:</strong> {data.currentVersion}</p>
      <p><strong>License:</strong> {data.license}</p>
      <p><strong>Weekly Downloads:</strong> {data.weeklyDownloads.toLocaleString()}</p>
      <p><strong>Dependencies:</strong> {data.dependencyCount}</p>
      <p>
        <strong>Unpacked Size:</strong>{" "}
        {data.unpackedSize ? (data.unpackedSize / 1024).toFixed(2) + " KB" : "N/A"}
      </p>
      <p>
        <strong>Last Publish:</strong>{" "}
        {data.lastPublishDate
          ? new Date(data.lastPublishDate).toLocaleDateString()
          : "N/A"}
      </p>
    </div>
  );
}
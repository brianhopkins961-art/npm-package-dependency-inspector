export async function fetchNpmMetrics(packageName, signal) {
  const encoded = encodeURIComponent(packageName);

  const [metaRes, dlRes] = await Promise.all([
    fetch(`https://registry.npmjs.org/${encoded}`, { signal }),
    fetch(`https://api.npmjs.org/downloads/point/last-week/${encoded}`, { signal }),
  ]);

  if (!metaRes.ok) {
    throw new Error("Package not found");
  }

  const meta = await metaRes.json();
  const dl = await dlRes.json();

  const latest = meta?.["dist-tags"]?.latest;
  const version = meta?.versions?.[latest];

  if (!latest || !version) {
    throw new Error("Invalid package data");
  }

  return {
    currentVersion: latest,
    license: version.license ?? "N/A",
    weeklyDownloads: dl.downloads ?? 0,
    dependencyCount: Object.keys(version.dependencies ?? {}).length,
    unpackedSize: version.dist?.unpackedSize ?? null,
    lastPublishDate: meta.time?.[latest] ?? null,
  };
}
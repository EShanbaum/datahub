import React from "react";
import { useDataStore } from "../store/dataStore";

export const AnalysisPanel = () => {
  const data = useDataStore((s) => s.data);

  return data && data.length > 0 ? (
    <div className="border p-2 rounded">
      <h2 className="text-lg font-semibold mb-2">Analysis Tools (Coming Soon)</h2>
      <p>Use JS ML libraries or backend API for clustering, PCA, etc.</p>
    </div>
  ) : null;
};
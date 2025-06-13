import React from "react";
import { useDataStore } from "../store/dataStore";
import * as d3 from "d3";

export const GraphBuilder = () => {
  const data = useDataStore((s) => s.data);

  // Placeholder - implement dropdowns and render basic scatterplot
  return data && data.length > 0 ? (
    <div className="border p-2 rounded">
      <h2 className="text-lg font-semibold mb-2">Graph Builder (Coming Soon)</h2>
      <p>Select fields and choose a graph type to render with D3.js</p>
    </div>
  ) : null;
};
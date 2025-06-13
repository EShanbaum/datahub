import React from "react";
import { CSVUpload } from "./components/CSVUpload";
import { DataTable } from "./components/DataTable";
import { GraphBuilder } from "./components/GraphBuilder";
import { AnalysisPanel } from "./components/AnalysisPanel";

function App() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Data Analysis Tool</h1>
      <CSVUpload />
      <DataTable />
      <GraphBuilder />
      <AnalysisPanel />
    </div>
  );
}

export default App;
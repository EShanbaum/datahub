import React from "react";
import Papa from "papaparse";
import { useDataStore } from "../store/dataStore";

export const CSVUpload = () => {
  const setData = useDataStore((s) => s.setData);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return <input type="file" accept=".csv" onChange={handleFileChange} />;
};
import React from "react";
import { useDataStore } from "../store/dataStore";

export const DataTable = () => {
  const data = useDataStore((s) => s.data);

  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-auto max-h-96 border rounded">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="border px-2 py-1">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 50).map((row, idx) => (
            <tr key={idx}>
              {headers.map((h) => (
                <td key={h} className="border px-2 py-1">
                  {row[h]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
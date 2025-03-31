import React, { useEffect, useState } from "react";
import { fetchSheetData } from "../googleSheets";

const SheetReader = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSheetData()
      .then(values => {
        setData(values);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching sheet:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>טוען נתונים...</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>נתונים מהשיטס</h2>
      <table border="1" style={{ margin: "auto", direction: "rtl" }}>
        <thead>
          <tr>
            {data[0]?.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetReader;

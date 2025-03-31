export async function fetchSheetData(range = "TaskTracking!A1:F10") {
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;

  if (!API_KEY || !SPREADSHEET_ID) {
    console.error("Missing API Key or Spreadsheet ID");
    return [];
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.error) {
      console.error("Google Sheets API error:", result.error.message);
      return [];
    }

    return result.values || [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

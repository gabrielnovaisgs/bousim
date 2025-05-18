import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "@config/financial-sheets-key.json"
import { env } from "@env/env";
import { JWT } from "google-auth-library";
import { writeFileSync } from "fs";
type FinancialRowData = {
  ID: string;
  Date: string;
  Name: string;
  Value: string;
  Description: string;
  From: string;
  To: string;
  Category: string;
  'Charge...': string;
  'Personal category': string;
  Payments: string;
  time: string;
}

export async function GET(request: Request) {
  const serviceAccountAuth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
  const doc = new GoogleSpreadsheet(env.SPREADSHEET_ID, serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = await doc.sheetsById[env.SHEETS_ID]
  const rows = await sheet.getRows<FinancialRowData>({
    offset: 400,
    limit: 200,

  });
  const rowsData = rows.map((row) => {
    return {
      id: row.get('ID'),
      date: row.get('Date'),
      name: row.get('Name'),
      value: convertToMoney(row.get('Value')),
      description: row.get('Description'),
      from: row.get('From'),
      to: row.get('To'),
      category: row.get('Category'),
      charge: row.get('Charge...'),
      personalCategory: row.get('Personal category'),
      payments: row.get('Payments'),
      time: row.get('time'),
    }
  })
  
  writeFileSync("./config/transactions.json", JSON.stringify(rowsData, null, 2));
  

  return new NextResponse("Hello, Next.js!");
}

function convertToMoney(value: string) {
  if (!value) return null;
  const convertedValue = value.replace(/,/g, ".").replace(/[R$\s]/g, "")
  
  return parseFloat(convertedValue).toFixed(2);
}
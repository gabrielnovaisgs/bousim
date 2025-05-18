import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "@config/financial-sheets-key.json"
import { env } from "@env/env";
import { JWT } from "google-auth-library";
import { writeFileSync } from "fs";
import { FinancialData } from "@customTypes/transaction";

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
  let index = 0
  const rowsData = rows.map((row) => {
    index++

    const newRow: FinancialData = {
      id: index,
      externalId: row.get('ID'),
      date: row.get('Date'),
      name: row.get('Name'),
      amount: convertToMoney(row.get('Value')),
      description: row.get('Description'),
      from: row.get('From'),
      to: row.get('To'),
      category: row.get('Category'),
      charge: row.get('Charge...'),
      personalCategory: row.get('Personal category'),
      payments: row.get('Payments'),
      time: row.get('time'),
    }
    return newRow
  })
  
  writeFileSync("./config/transactions.json", JSON.stringify(rowsData, null, 2));
  

  return new NextResponse("Hello, Next.js!");
}

function convertToMoney(value: string) {
  if (!value) return null;
  const convertedValue = value.replace(/[Rr\$\s.]/g, "").replace(/,/g, ".")
  
  return parseFloat(convertedValue);
}
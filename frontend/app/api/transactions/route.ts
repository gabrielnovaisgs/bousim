import transactions from "@config/transactions.json"
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  return NextResponse.json({
    data: transactions,
  });
  
}
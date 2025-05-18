"use client"

import React from "react";
import { useTransactions } from "@hooks/use-transactions";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@components/ui/table";

export default function TransactionsPage() {
  const { data, loading } = useTransactions();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Transactions</h1>
      <Table>
        <TableCaption>List of transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.amount ?? "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

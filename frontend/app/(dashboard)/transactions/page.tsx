"use client"

import React from "react";
import { useTransactions } from "@hooks/use-transactions";

import { DataTable } from "./data-table";
import { columns } from "./transaction-column";

export default function TransactionsPage() {
    const { data, loading } = useTransactions();

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <h1 className="mb-4 text-2xl font-bold bg-red-200">Transactions</h1>
            <DataTable data={data} columns={columns} />
        </>
    );
}

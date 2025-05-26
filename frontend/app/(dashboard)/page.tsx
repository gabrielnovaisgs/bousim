"use client"

import { useTransactions } from "@hooks/use-transactions";
import { CardsList } from "./(home)/cards-list";
import { CategoryExpensesPlot } from "./(home)/category-expenses-plot";



export default function Home() {


  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Visão geral das suas finanças</p>
      <CardsList />
      <CategoryExpensesPlot />
    </main>
  );
}

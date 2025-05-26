"use client"

import { useTransactions } from "@hooks/use-transactions";
import { CardsList } from "./(home)/cards-list";
import { CategoryExpensesPlot } from "./(home)/category-expenses-plot";



export default function Home() {


  return (
    <main className="min-h-screen p-4 flex flex-col gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Dashboard</h1>
      <p>Visão geral das suas finanças</p>
      <CardsList />
      <CategoryExpensesPlot />
    </main>
  );
}

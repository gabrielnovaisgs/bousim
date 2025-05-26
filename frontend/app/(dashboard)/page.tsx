"use client"

import { useTransactions } from "@hooks/use-transactions";
import { CardsList } from "./(home)/cards-list";
import { CategoryExpensesPlot } from "./(home)/category-expenses-plot";
import { Table, TableCaption, TableHeader } from "@components/ui/table";
import { LastTransactions } from "./(home)/last-transactions";



export default function Home() {


  return (
    <main className="min-h-screen p-8 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Dashboard</h1>
      </div>
      <CardsList />
      <CategoryExpensesPlot />
      <LastTransactions />
    </main>
  );
}

"use client"

import { useTransactions } from "@hooks/use-transactions";
import { CardsList } from "./(home)/cards-list";
import { CategoryExpensesPlot } from "./(home)/category-expenses-plot";
import { Table, TableCaption, TableHeader } from "@components/ui/table";
import { LastTransactions } from "./(home)/last-transactions";



export default function Home() {


  return (
    <main className="p-8 flex flex-1 flex-col gap-8 mt-10">

      <CardsList />
      <CategoryExpensesPlot />
      <LastTransactions />
    </main>
  );
}

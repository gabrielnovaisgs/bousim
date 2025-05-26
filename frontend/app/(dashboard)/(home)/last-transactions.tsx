import { Button } from "@components/ui/button";
import { Card, CardContent, CardFooter } from "@components/ui/card";
import { Table, TableHeader, TableCaption, TableHead, TableRow, TableBody, TableCell } from "@components/ui/table";
import { useTransactions } from "@hooks/use-transactions";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export function LastTransactions() {
    const { data } = useTransactions();

    return (
        <div className="flex flex-col gap-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Últimas transações
            </h2>
            <Card >
                <CardContent>
                    <Table>

                        <TableHeader>
                            <TableRow>

                                <TableHead>Data</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead >Valor</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.slice(data.length - 6, data.length - 1).reverse().map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell>{transaction.date}</TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Link href={"/transactions"}><Button variant={"outline"}>Ver mais transações<ArrowRight /></Button></Link>
                </CardFooter>
            </Card>
        </div >
    );
}
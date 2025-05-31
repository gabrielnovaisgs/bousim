import { Card, CardContent } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table";
import Image from "next/image";

export default function CardDetailsPage() {
    // Dados mockados para exemplo
    const card = {
        name: "Cartão Nubank",
        number: "**** **** **** 1234",
        bank: "Nubank",
        limit: 5000,
        dueDate: "10/06/2025",
        status: "Ativo",
        image: "/card-image.png", // coloque uma imagem em public/
    };
    const transactions = [
        { date: "01/05/2025", description: "Supermercado", category: "Alimentação", value: 150.75 },
        { date: "03/05/2025", description: "Posto de Gasolina", category: "Transporte", value: 200.00 },
        { date: "10/05/2025", description: "Farmácia", category: "Saúde", value: 80.50 },
    ];

    return (
        <div className="flex flex-col gap-8 p-6">
            {/* Blocos lado a lado */}
            <div className="flex flex-row gap-8">
                {/* Bloco 1 */}
                <Card className="flex-1 min-w-[300px]">
                    <CardContent className="flex flex-col gap-4 p-6">
                        <div>
                            <h2 className="text-xl font-bold">{card.name}</h2>
                            <p className="text-muted-foreground text-lg">{card.number}</p>
                        </div>
                        <Button variant="outline">Editar</Button>
                    </CardContent>
                </Card>
                {/* Bloco 2 */}
                <Card className="flex-1 min-w-[300px] flex items-center justify-center">
                    <CardContent className="flex items-center justify-center p-6">
                        <Image src={card.image} alt="Cartão" width={220} height={140} className="rounded-lg shadow" />
                    </CardContent>
                </Card>
            </div>

            {/* Tabela de detalhes do cartão */}
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Banco</TableCell>
                                <TableCell>{card.bank}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Limite do cartão</TableCell>
                                <TableCell>R$ {card.limit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Data de vencimento</TableCell>
                                <TableCell>{card.dueDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Status</TableCell>
                                <TableCell>{card.status}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Tabela de transações */}
            <Card>
                <CardContent className="p-0">
                    <h3 className="text-lg font-semibold p-4 pb-2">Transações</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Data</TableHead>
                                <TableHead>Descrição</TableHead>
                                <TableHead>Categoria</TableHead>
                                <TableHead>Valor</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((t, i) => (
                                <TableRow key={i}>
                                    <TableCell>{t.date}</TableCell>
                                    <TableCell>{t.description}</TableCell>
                                    <TableCell>{t.category}</TableCell>
                                    <TableCell>R$ {t.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

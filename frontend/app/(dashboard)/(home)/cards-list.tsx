import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@components/ui/card";
import { ScrollArea, ScrollBar } from "@components/ui/scroll-area";
const cards = [
    {
        name: "Card 1",
        value: 1000,
        type: "credit",
    },
    {
        name: "Card 2",
        value: 2500,
        type: "debit",
    },
    {
        name: "Card 1",
        value: 1000,
        type: "credit",
    },
    {
        name: "Card 2",
        value: 2500,
        type: "debit",
    },
    {
        name: "Card 1",
        value: 1000,
        type: "credit",
    },
    {
        name: "Card 2",
        value: 2500,
        type: "debit",
    }
]

export function CardsList() {
    return (
        <ScrollArea className=" w-full px-2 py-4 mt-4 whitespace-nowrap rounded-md border" >
            <div className="flex w-max space-x-4">
                {cards.map((card, index) => (
                    <Card key={index} className="w-56 ">
                        <CardHeader>
                            <CardTitle>{card.name}</CardTitle>
                            <CardDescription>{card.type === "credit" ? "Crédito" : "Débito"}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Valor: R$ {card.value.toFixed(2)}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
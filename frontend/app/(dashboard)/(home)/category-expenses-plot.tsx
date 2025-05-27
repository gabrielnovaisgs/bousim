"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { ChartConfig, ChartContainer } from "@components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { ReactEventHandler, useState } from "react";
import { Bar, BarChart, LabelList, Pie, PieChart, XAxis } from "recharts";


const data = [
    { category: "Food", value: 120.50 },
    { category: "Transport", value: 80.00 },
    { category: "Entertainment", value: 60.75 },
    { category: "Utilities", value: 150.00 },
    { category: "Health", value: 90.25 },
];

const chartConfig = {
    value: {
        label: "Valor",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig
export function CategoryExpensesPlot() {

    const [plot, setPlot] = useState<"bar" | "pie">("bar");

    function handlePlotChange(value: "bar" | "pie") {
        setPlot(value);
    }
    return (
        <div className="flex flex-col gap-4">
            <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">Gastos por categoria</h2>
            <Card >
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <p>Mês 5 de 2025</p>
                        <Select onValueChange={handlePlotChange} value={plot}>
                            <SelectTrigger>
                                <SelectValue placeholder="Escolha um gráfico" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bar">
                                    Gráfico de barras
                                </SelectItem>
                                <SelectItem value="pie">
                                    Gráfico de pizza
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[200px]  h-56 w-full">

                        {plot === "bar" && (

                            <BarChart accessibilityLayer data={data}>
                                <Bar dataKey={"value"} fill="var(--chart-1)" radius={8} maxBarSize={32} ></Bar>
                                <XAxis dataKey={"category"}
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={2}


                                />
                            </BarChart>
                        )
                        }

                        {plot === "pie" && (
                            <PieChart>
                                <Pie data={data}
                                    dataKey="value"
                                    nameKey="category"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="var(--chart-1)"
                                    label >
                                    <LabelList
                                        dataKey="category"
                                        className="fill-background"
                                        stroke="none"
                                        fontSize={12}
                                    >

                                    </LabelList>
                                </Pie>
                            </PieChart>
                        )}

                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}
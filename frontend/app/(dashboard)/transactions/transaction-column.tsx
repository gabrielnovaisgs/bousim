import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@components/ui/dropdown-menu";
import { FinancialData } from "@customTypes/transaction";
import { ColumnDef } from "@tanstack/react-table";
import { table } from "console";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<FinancialData>[] = [
    {
        id: "select",
        enableHiding: false,
        enableSorting: false,
        size: 32,
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Selecionar tudo"
            />
        ),
        cell: ({ row }) => {
            return (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="selecionar linha"
                />
            )
        }
    },
    {
        accessorKey: "date",
        header: "Date",
        size: 100
    },
    {
        accessorKey: "name",
        header: "Name",
        enableResizing: false,
        cell: ({ cell }) => {
            return (<p className="text-wrap ">{cell.getValue() as string}</p>)
        }



    },
    {
        accessorKey: "description",
        header: "Description",
        enableResizing: false,
        cell: ({ cell }) => {
            return (<p className="text-wrap">{cell.getValue() as string}</p>)
        }



    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant={'ghost'}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4"></ArrowUpDown>
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
            return <span>{amount ? new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(amount) : "-"}</span>;
        },
    },

    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>actions</DropdownMenuLabel>
                        <DropdownMenuItem

                            onClick={() => navigator.clipboard.writeText(payment.id.toString())}
                        >Copy payment ID</DropdownMenuItem>
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
import axios from "axios";
import { View } from "./Themed";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { Button, FlatList } from "react-native";
import api from "@/api/api";

interface Transaction {
    id: string;
    userId: string;
    amount: number;
    date: string;
}

export function TransactionsList() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await api.get('/api/transactions');
                setTransactions(response.data.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <View>
            <Button onPress={() => { console.log("Transactions:", transactions) }} title="Click me"></Button>
            <Text>Transactions new</Text>


            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.amount}</Text>
                        <Text>{item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
}
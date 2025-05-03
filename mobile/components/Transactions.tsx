import axios from "axios";
import { View, Text } from "./Themed";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

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
                const response = { data: [{ id: "1", userId: "4b5a03f1-317b-4b3f-b372-b3cc01725431", amount: 100, date: "2021-01-01" }] };//await axios.get('http://localhost:3000/transactions/user/4b5a03f1-317b-4b3f-b372-b3cc01725431');
                setTransactions(response.data);
                console.log("Transactions:", response.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <View>
            <Text>Transactions</Text>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.userId}</Text>
                        <Text>{item.amount}</Text>
                        <Text>{item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
}
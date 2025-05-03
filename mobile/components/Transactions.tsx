import axios from "axios";
import { View, Text } from "./Themed";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

export async function TransactionsList() {
    const [transactions, setTransactions] = useState([])

    useEffect(()=> {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/transactions/user/4b5a03f1-317b-4b3f-b372-b3cc01725431');
                setTransactions(response.data);
                console.log("Transactions:", response.data);  
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    },[])
    //const transactions = await axios.get('http://localhost:3000/transactions/user/4b5a03f1-317b-4b3f-b372-b3cc01725431')
    return (
    <View>
        <Text>Transactions</Text>
        <FlatList data={transactions} renderItem={({item}) => (
            <View>
                <Text>{item.id}</Text>
                <Text>{item.userId}</Text>
                <Text>{item.amount}</Text>
                <Text>{item.date}</Text>
            </View>
        )}/>

    </View>
    )
}
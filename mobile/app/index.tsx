import { Text, View } from "@/components/Themed";
import { TransactionsList } from "@/components/Transactions";
import axios from "axios";
import { Alert, Button, TextInput } from "react-native";

interface ITransaction {
    id: string;
    userId: string;
    amount: number;
    date: string;
}

export default function index() {

    
    return (
        <View style={{flex:1}}>
            <TransactionsList />
            <Button title="Login" onPress={() => alert('Button Pressed!')} />
        </View>
    );
}
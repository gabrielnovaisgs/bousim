"use client"
import { FinancialData } from "@customTypes/transaction";
import { useEffect, useState } from "react";

export function  useTransactions() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<FinancialData[]>([]);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3000/api/transactions").then((res) => {
            res.json().then((value) => {
                setData(value.data);
                setLoading(false);
            })
        })

    },[])
  
   
    return {data, loading}

}
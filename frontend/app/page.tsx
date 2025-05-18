"use client"
import { useTransactions } from "./hooks/use-transactions";

export default function Home() {
  const { data, loading
  } = useTransactions()

  return (
    <div>
      <h1>Transactions</h1>
      {loading && <p>Loading...</p>}
      {!loading && data.length === 0 && <p>No transactions found.</p>}
      {!loading && data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

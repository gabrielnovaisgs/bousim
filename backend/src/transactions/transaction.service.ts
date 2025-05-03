import { Injectable } from '@nestjs/common';

const uuid = '4b5a03f1-317b-4b3f-b372-b3cc01725431';

@Injectable()
export class TransactionService {
  async getTransactionsByUserId(userId: string): Promise<any[]> {
    // Simulate fetching transactions from a database
    const transactions = [
      { id: '1', userId: uuid, amount: 100 },
      { id: '2', userId: uuid, amount: 200 },
      { id: '3', userId: '456', amount: 300 },
    ];
    await Promise.resolve(transactions);
    return transactions.filter((transaction) => transaction.userId === userId);
  }
}

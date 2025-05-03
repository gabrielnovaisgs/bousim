import { Controller, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/user/:userId')
  getTransactionsByUserId(@Param('userId') userId: string) {
    return this.transactionService.getTransactionsByUserId(userId);
  }
}

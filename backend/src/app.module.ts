import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { TransactionModule } from './transactions/transaction.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TransactionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

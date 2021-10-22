import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './v1/account/account.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AccountModule
  ],
})
export class AppModule {}

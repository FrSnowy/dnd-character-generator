import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AccountModule
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './account.model';

@Module({
  providers: [AccountService],
  controllers: [AccountController],
  imports: [
    SequelizeModule.forFeature([Account])
  ],
})
export class AccountModule {}

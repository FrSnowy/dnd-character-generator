import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDTO } from './account.dto';
import { Account } from './account.model';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account) private accountRepository: typeof Account) {}

  async createAccount(createAccountDTO: CreateAccountDTO) {
    const account = await this.accountRepository.create(createAccountDTO);
    return account;
  }
}

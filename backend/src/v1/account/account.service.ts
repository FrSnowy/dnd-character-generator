import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AccountDTO } from './account.dto';
import { Account } from './account.model';
import * as EmailValidator from 'email-validator';


@Injectable()
export class AccountService {
  constructor(@InjectModel(Account) private accountRepository: typeof Account) {}

  async accountExists(accountDTO: AccountDTO) {
    return !!await this.accountRepository.findOne({
      where: {
        email: accountDTO.email
      }
    });;
  }

  isAccountMailValid(createAccountDTO: AccountDTO) {
    return EmailValidator.validate(createAccountDTO.email);
  }

  async createAccount(createAccountDTO: AccountDTO) {
    const account = await this.accountRepository.create(createAccountDTO);
    return account;
  }
}

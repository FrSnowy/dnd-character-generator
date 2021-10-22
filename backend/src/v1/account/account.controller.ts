import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('/v1/account')
export class AccountController {
  accountService = new AccountService();

  @Get('/all')
  getAccounts() {
    return this.accountService.getAccount();
  }
}

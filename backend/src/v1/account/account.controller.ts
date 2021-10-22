import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDTO } from './account.dto';
import { AccountService } from './account.service';

@Controller('/v1/account')
export class AccountController {
  constructor(private accountSerivce: AccountService) {}

  @Post()
  createAccount(@Body() accountDTO: CreateAccountDTO) {
    return this.accountSerivce.createAccount(accountDTO);
  }
}

import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AccountDTO } from './account.dto';
import { AccountService } from './account.service';

@Controller('/v1/account')
export class AccountController {
  constructor(private accountSerivce: AccountService) {}

  @Post()
  async createAccount(@Body() accountDTO: AccountDTO) {
    const isAccountMailValid = this.accountSerivce.isAccountMailValid(accountDTO);
    const isAccountExists = await this.accountSerivce.accountExists(accountDTO);

    if (!isAccountMailValid) {
      throw new HttpException('Invalid mail', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if (isAccountExists) {
      throw new HttpException('Mail already exists', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    return await this.accountSerivce.createAccount(accountDTO);
  }
}

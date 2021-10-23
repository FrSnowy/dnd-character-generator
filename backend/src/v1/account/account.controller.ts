import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import ERROR_MESSAGE from '../shared/constants/ErrorMessage';
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
      throw new HttpException(ERROR_MESSAGE.ENTITY_INVALID, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if (isAccountExists) {
      throw new HttpException(ERROR_MESSAGE.ENTITY_EXISTS, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    return await this.accountSerivce.createAccount(accountDTO);
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('/account')
export class AccountController {
  @Get('/all')
  getAccounts() {
    return { id: 1, name: 'test' }
  }
}

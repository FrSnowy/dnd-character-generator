import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  public getAccount() {
    return { id: 1, name: 'test' }
  }
}

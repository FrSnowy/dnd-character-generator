import { AccountCreationAttributes } from "./account.model"

export class AccountDTO implements AccountCreationAttributes {
  readonly email: string;
  readonly password: string;
}
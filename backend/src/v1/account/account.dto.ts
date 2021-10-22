import { AccountCreationAttributes } from "./account.model"

export class CreateAccountDTO implements AccountCreationAttributes {
  readonly email: string;
  readonly password: string;
}
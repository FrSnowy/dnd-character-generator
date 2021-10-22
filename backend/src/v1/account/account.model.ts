import { Column, DataType, Model, Table } from 'sequelize-typescript';

export type AccountCreationAttributes = {
  email: string;
  password: string;
}

@Table({ tableName: 'account', updatedAt: false, createdAt: false })
export class Account extends Model<Account, AccountCreationAttributes> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: AccountCreationAttributes['email'];

  @Column({ type: DataType.STRING, allowNull: false })
  password: AccountCreationAttributes['password'];
}
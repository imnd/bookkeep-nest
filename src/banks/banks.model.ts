import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";

interface BankCreationInterface {
  subcatId: number;
  name: string;
  price: number;
  unit: string;
}

@Table({
  tableName: 'banks',
  createdAt: false,
  updatedAt: false,
})

export class Bank extends Model<Bank, BankCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 25436567688, description: 'Bank identification code'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.BIGINT,
    allowNull: false,
  })
  BIC: number;

  @ApiProperty({example: 'HSBC', description: 'Bank title'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({example: true, description: 'Is bank in list'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: boolean;
}

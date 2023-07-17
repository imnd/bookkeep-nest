import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";

interface PurchaseCreationInterface {
  number: string;
  sum: number;
  date: string;
}

@Table({
  tableName: 'purchases',
})

export class Purchase extends Model<Purchase, PurchaseCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: '3663FG36T', description: 'Purchase number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @ApiProperty({example: 4250, description: 'Purchase sum'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  sum: number;

  @ApiProperty({example: '2022-11-01', description: 'Purchase date'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;
}

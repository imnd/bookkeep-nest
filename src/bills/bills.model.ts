import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";
import { InvoiceBill } from "../invoices/invoice-bill.model";
import { Invoice } from "../invoices/invoices.model";

interface BillCreationInterface {
  clientId: number;
  contractNum: string;
  sum: number;
  remainder: number;
  description: string;
}

@Table({
  tableName: 'bills',
})

export class Bill extends Model<Bill, BillCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 2, description: 'Client ID'})
  @ForeignKey(() => Client)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @ApiProperty({example: '3663FG36T', description: 'Bill contract number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  contractNum: string;

  @ApiProperty({example: 4250, description: 'Bill sum'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  sum: number;

  @ApiProperty({example: 25, description: 'How much money is not allocated to invoices'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  remainder: number;

  @ApiProperty({example: 'Purchase of vegetables', description: 'Bill description'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => Invoice, () => InvoiceBill)
  invoices: Invoice[]
}

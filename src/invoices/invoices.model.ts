import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";
import { InvoiceBill } from "./invoice-bill.model";
import { Bill } from "../bills/bills.model";

interface InvoiceCreationInterface {
  clientId: number;
  invoiceNum: string;
  contractNum: string;
  sum: number;
  paid: number;
  date: string;
}

@Table({
  tableName: 'invoices',
})

export class Invoice extends Model<Invoice, InvoiceCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: '3663FG36T', description: 'Invoice number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  invoiceNum: string;

  @ApiProperty({example: '3663FG36T', description: 'Contract number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  contractNum: string;

  @ApiProperty({example: 1, description: 'Client ID'})
  @ForeignKey(() => Client)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @ApiProperty({example: 4250, description: 'Invoice sum'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  sum: number;

  @ApiProperty({example: 25, description: 'How much money is paid'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  paid: number;

  @ApiProperty({example: '2022-11-01', description: 'Invoice date'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;

  @BelongsToMany(() => Bill, () => InvoiceBill)
  bills: Bill[]
}

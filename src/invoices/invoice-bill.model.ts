import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Bill } from "../bills/bills.model";
import { Invoice } from "./invoices.model";

@Table({
  tableName: 'invoice-bill',
  createdAt: false,
  updatedAt: false,
})

  export class InvoiceBill extends Model<InvoiceBill> {
  @ApiProperty({example: 1, description: 'Invoice ID'})
  @ForeignKey(() => Invoice)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  invoiceId: number;

  @ApiProperty({example: 2, description: 'Bill ID'})
  @ForeignKey(() => Bill)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
  })
  billId: number;

  @ApiProperty({example: 2000, description: 'Price'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
  })
  price: number;
}

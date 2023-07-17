import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Table,
} from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";
import { InvoiceBill } from "./invoice-bill.model";
import { Bill } from "../bills/bills.model";
import { DocumentModel } from "../share/document-model";

interface InvoiceCreationInterface extends DocumentCreationInterface {
  clientId: number;
  invoiceNum: string;
  contractNum: string;
  paid: number;
  date: string;
}

@Table({
  tableName: "invoices",
})
export class Invoice extends DocumentModel<Invoice, InvoiceCreationInterface> {
  @ApiProperty({ example: "3663FG36T", description: "Invoice number" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  invoiceNum: string;

  @ApiProperty({ example: "3663FG36T", description: "Contract number" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  contractNum: string;

  @ApiProperty({ example: 1, description: "Client ID" })
  @ForeignKey(() => Client)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @ApiProperty({ example: 25, description: "How much money is paid" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  paid: number;

  @ApiProperty({ example: "2022-11-01", description: "Date" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;

  @BelongsToMany(() => Bill, () => InvoiceBill)
  bills: Bill[];
}

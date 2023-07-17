import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Invoice } from "../invoices/invoices.model";
import { Article } from "../articles/articles.model";

interface InvoiceRowCreationInterface {
  invoiceId: number;
  articleId: number;
  quantity: number;
  price: number;
}

@Table({
  tableName: 'invoice-rows',
})

export class InvoiceRow extends Model<InvoiceRow, InvoiceRowCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 1, description: 'Invoice ID'})
  @ForeignKey(() => Invoice)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  invoiceId: number;

  @ApiProperty({example: 1, description: 'Article ID'})
  @ForeignKey(() => Article)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  articleId: number;

  @ApiProperty({example: 50, description: 'Article units quantity'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  quantity: number;

  @ApiProperty({example: 25, description: 'Article units price'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  price: number;
}

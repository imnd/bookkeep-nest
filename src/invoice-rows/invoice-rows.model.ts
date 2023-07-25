import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Table,
} from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Article } from "../articles/articles.model";
import { RowModel } from "../share/row-model";
import { Contract } from "../contracts/contracts.model";
import { Invoice } from "../invoices/invoices.model";

interface InvoiceRowCreationInterface extends RowCreationInterface {
  articleId: number;
}

@Table({
  tableName: "invoice-rows",
})
export class InvoiceRow extends RowModel<
  InvoiceRow,
  InvoiceRowCreationInterface
> {
  @ApiProperty({ example: 1, description: "Article ID" })
  @ForeignKey(() => Article)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  articleId: number;

  // Relations

  @BelongsTo(() => Article, "articleId")
  article: Article[];
}

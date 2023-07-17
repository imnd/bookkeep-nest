import { Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { ArticleSubcategory } from "../article-subcategories/article-subcategories.model";
import { RowModel } from "../share/row-model";

interface PurchaseRowCreationInterface extends RowCreationInterface {
  articleSubcategoryId: number;
}

@Table({
  tableName: "purchase-rows",
})
export class PurchaseRow extends RowModel<
  PurchaseRow,
  PurchaseRowCreationInterface
> {
  @ApiProperty({ example: 1, description: "Article subcategory ID" })
  @ForeignKey(() => ArticleSubcategory)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  articleSubcategoryId: number;
}

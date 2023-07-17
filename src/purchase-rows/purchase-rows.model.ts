import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Purchase } from "../purchases/purchases.model";
import { Article } from "../articles/articles.model";
import { ArticleSubcategory } from "../article-subcategories/article-subcategories.model";

interface PurchaseRowCreationInterface {
  purchaseId: number;
  articleId: number;
  quantity: number;
  price: number;
}

@Table({
  tableName: 'purchase-rows',
})

export class PurchaseRow extends Model<PurchaseRow, PurchaseRowCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 1, description: 'Purchase ID'})
  @ForeignKey(() => Purchase)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  purchaseId: number;

  @ApiProperty({example: 1, description: 'Article subcategory ID'})
  @ForeignKey(() => ArticleSubcategory)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  articleSubcategoryId: number;

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

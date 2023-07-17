import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { ArticleCategory } from "../article-categories/article-categories.model";

interface ArticleSubcategoryCreationInterface {
  catId: number;
  name: string;
}

@Table({
  tableName: 'article-subcategories',
})

export class ArticleSubcategory extends Model<ArticleSubcategory, ArticleSubcategoryCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 2, description: 'Article category ID'})
  @ForeignKey(() => ArticleCategory)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  catId: number;

  @ApiProperty({example: 'Fruits', description: 'Article subcategory title'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}

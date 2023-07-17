import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";

interface ArticleCategoryCreationInterface {
  name: string;
  description: string;
}

@Table({
  tableName: 'article-categories',
})

export class ArticleCategory extends Model<ArticleCategory, ArticleCategoryCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'Fruits', description: 'Article category title'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({example: 'Fruits', description: 'Article category description'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}

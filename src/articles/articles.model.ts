import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";
import { ArticleSubcategory } from "../article-subcategories/article-subcategories.model";
import { ClientArticlePrice } from "../clients/client-article-prices.model";

interface ArticleCreationInterface {
  subcatId: number;
  name: string;
  price: number;
  unit: string;
}

@Table({
  tableName: 'articles',
})

export class Article extends Model<Article, ArticleCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 2, description: 'Subcategory ID'})
  @ForeignKey(() => ArticleSubcategory)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  subcatId: number;

  @ApiProperty({example: 'Apples Fushi', description: 'Article title'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({example: 245, description: 'Price of one article unit'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({example: true, description: 'Is article in list'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: boolean;

  @ApiProperty({example: 'kg', description: 'Article unit'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.ENUM('kg', 'item'),
    defaultValue: 'kg',
    allowNull: false,
  })
  unit: string;

  @BelongsToMany(() => Client, () => ClientArticlePrice)
  clients: Client[]
}

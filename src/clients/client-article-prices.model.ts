import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Article } from "../articles/articles.model";
import { Client } from "./clients.model";

@Table({
  tableName: 'client-article-prices',
  createdAt: false,
  updatedAt: false,
})

export class ClientArticlePrice extends Model<ClientArticlePrice> {
  @ApiProperty({example: 1, description: 'Client ID'})
  @ForeignKey(() => Client)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @ApiProperty({example: 2, description: 'Article ID'})
  @ForeignKey(() => Article)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
  })
  articleId: number;

  @ApiProperty({example: 2000, description: 'Price'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
  })
  price: number;
}

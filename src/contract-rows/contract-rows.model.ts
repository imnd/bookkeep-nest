import { Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Article } from "../articles/articles.model";
import { RowModel } from "../share/row-model";

interface ContractRowCreationInterface extends RowCreationInterface {
  articleId: number;
}

@Table({
  tableName: "contract-rows",
})
export class ContractRow extends RowModel<
  ContractRow,
  ContractRowCreationInterface
> {
  @ApiProperty({ example: 1, description: "Article ID" })
  @ForeignKey(() => Article)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  articleId: number;
}

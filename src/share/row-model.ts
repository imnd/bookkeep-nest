import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";

export abstract class RowModel<RowModel, RowInterface> extends Model<
  RowModel,
  RowInterface
> {
  @ApiProperty({ example: 1, description: "Primary key" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "Parent ID" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  parentId: number;

  @ApiProperty({ example: 50, description: "Article units quantity" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  quantity: number;

  @ApiProperty({ example: 25, description: "Article units price" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  price: number;
}

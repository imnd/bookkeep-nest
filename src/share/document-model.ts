import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { Contract } from "../contracts/contracts.model";
import { DocumentService } from "./document-service";

export abstract class DocumentModel<RowModel, RowInterface> extends Model<
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

  @ApiProperty({ example: 4250, description: "Sum" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  sum: number;

  @ApiProperty({ example: "2022-11-01", description: "Date" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;
}

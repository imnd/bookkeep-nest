import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";
import { DocumentModel } from "../share/document-model";
import { ContractRow } from "../contract-rows/contract-rows.model";

interface ContractCreationInterface extends DocumentCreationInterface {
  clientId: number;
  contractNum: string;
  type: string;
  paid: number;
  termStart: string;
  termEnd: string;
}

@Table({
  tableName: "contracts",
})
export class Contract extends DocumentModel<
  Contract,
  ContractCreationInterface
> {
  @ApiProperty({ example: 1, description: "Client ID" })
  @ForeignKey(() => Client)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @ApiProperty({ example: "3663FG36T", description: "Contract number" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  contractNum: string;

  @ApiProperty({ example: "contract", description: "Contract type" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.ENUM("contract", "agreement"),
    defaultValue: "contract",
    allowNull: false,
  })
  type: string;

  @ApiProperty({ example: 25, description: "How much money is paid" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  paid: number;

  @ApiProperty({ example: "2022-11-01", description: "Contract starts from" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: true,
  })
  termStart: string;

  @ApiProperty({ example: "2024-11-01", description: "Contract ends at" })
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: true,
  })
  termEnd: string;

  // Relations

  @BelongsTo(() => Client, "clientId")
  client: Client;

  @HasMany(() => ContractRow, "parentId")
  rows?: ContractRow[];
}

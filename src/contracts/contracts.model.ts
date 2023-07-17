import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Client } from "../clients/clients.model";

interface ContractCreationInterface {
  clientId: number;
  contractNum: string;
  type: string;
  sum: number;
  paid: number;
  date: string;
  termStart: string;
  termEnd: string;
}

@Table({
  tableName: 'contracts',
})

export class Contract extends Model<Contract, ContractCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 1, description: 'Client ID'})
  @ForeignKey(() => Client)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @ApiProperty({example: '3663FG36T', description: 'Contract number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  contractNum: string;

  @ApiProperty({example: 'contract', description: 'Contract type'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.ENUM('contract', 'agreement'),
    defaultValue: 'contract',
    allowNull: false,
  })
  type: string;

  @ApiProperty({example: 4250, description: 'Contract sum'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  sum: number;

  @ApiProperty({example: 25, description: 'How much money is paid'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  paid: number;

  @ApiProperty({example: '2022-11-01', description: 'Contract date'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;

  @ApiProperty({example: '2022-11-01', description: 'Contract starts from'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: true,
  })
  termStart: string;

  @ApiProperty({example: '2024-11-01', description: 'Contract ends at'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: true,
  })
  termEnd: string;
}

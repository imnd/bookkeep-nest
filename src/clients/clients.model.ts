import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Article } from "../articles/articles.model";
import { Bank } from "../banks/banks.model";
import { Region } from "../regions/regions.model";
import { ClientArticlePrice } from "./client-article-prices.model";

interface ClientCreationInterface {
  regionId: number;
  name: string;
  address: string;
  phone: string;
}

@Table({
  tableName: 'clients',
})

export class Client extends Model<Client, ClientCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 2, description: 'Region ID'})
  @ForeignKey(() => Region)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
  })
  regionId: number;

  @ApiProperty({example: 'Townsend House', description: 'Client title'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({example: 'Townsend St, Townparks, Birr, Co. Offaly, Ireland', description: 'Client address'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({example: '+353579121276', description: 'Client phone'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @ApiProperty({example: 'Tom Johnes', description: 'Client contact name'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: true,
  })
  contactName: string;

  @ApiProperty({example: 'Bookkeeper', description: 'Client contact position'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: true,
  })
  contactPosition: string;

  @ApiProperty({example: 40601810600043000001, description: 'Client bank account number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: true,
  })
  bankAccountNum: string;

  @ApiProperty({example: 4, description: 'Client bank name'})
  @ForeignKey(() => Bank)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: true,
  })
  bankId: number;

  @ApiProperty({example: 1060601408, description: 'Unique Tax Reference Number'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: true,
  })
  UTR: number;

  @ApiProperty({example: '2012-11-01', description: 'Next call date'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.DATE,
    allowNull: true,
  })
  nextCallDate: string;

  @ApiProperty({example: 5, description: 'Sort order in list'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  sort: number;

  @ApiProperty({example: true, description: 'Is client in list'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: boolean;

  @BelongsToMany(() => Article, () => ClientArticlePrice)
  articles: Article[]
}

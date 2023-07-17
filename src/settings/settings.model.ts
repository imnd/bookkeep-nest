import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";

interface SettingCreationInterface {

}

@Table({
  tableName: 'settings',
  createdAt: false,
  updatedAt: false,
})

export class Setting extends Model<Setting, SettingCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'Company bank account number', description: 'Setting name'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({example: 'company_account', description: 'Setting key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  key: string;

  @ApiProperty({example: '40804550281007700040', description: 'Setting value'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  value: string;
}

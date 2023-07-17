import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";

interface RegionCreationInterface {
  subcatId: number;
  name: string;
  price: number;
  unit: string;
}

@Table({
  tableName: 'regions',
  createdAt: false,
  updatedAt: false,
})

export class Region extends Model<Region, RegionCreationInterface> {
  @ApiProperty({example: 1, description: 'Primary key'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'White Chapel', description: 'Region title'})
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}

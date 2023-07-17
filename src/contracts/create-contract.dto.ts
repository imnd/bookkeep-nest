import { ApiProperty } from "@nestjs/swagger";
import { CreateContractRowDto } from "../contract-rows/create-contract-row.dto";

export class CreateContractDto {
  readonly rows: CreateContractRowDto[]

  @ApiProperty({example: 2, description: 'Client ID'})
  readonly clientId: number;

  @ApiProperty({example: '3663FG36T', description: 'Contract number'})
  readonly contractNum: string;

  @ApiProperty({example: 'contract', description: 'Contract type'})
  readonly type: string;

  @ApiProperty({example: '2022-11-01', description: 'Contract date'})
  date: string;
}

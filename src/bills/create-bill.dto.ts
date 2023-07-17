import { ApiProperty } from "@nestjs/swagger";

export class CreateBillDto {
  @ApiProperty({example: 2, description: 'Client ID'})
  readonly clientId: number;

  @ApiProperty({example: '3663FG36T', description: 'Bill contract number'})
  readonly contractNum: string;

  @ApiProperty({example: 4250, description: 'Bill sum'})
  readonly sum: number;

  @ApiProperty({example: 250, description: 'How much money is not allocated to invoices'})
  readonly remainder: number;

  @ApiProperty({example: 'Purchase of vegetables', description: 'Bill description'})
  readonly description: string;
}

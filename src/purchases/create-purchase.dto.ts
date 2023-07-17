import { ApiProperty } from "@nestjs/swagger";
import { CreatePurchaseRowDto } from "../purchase-rows/create-purchase-row.dto";

export class CreatePurchaseDto {
  readonly rows: CreatePurchaseRowDto[]

  @ApiProperty({example: '3663FG36T', description: 'Purchase number'})
  readonly number: string;

  @ApiProperty({example: '2022-11-01', description: 'Purchase date'})
  date: string;
}

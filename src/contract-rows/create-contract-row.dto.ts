import { ApiProperty } from "@nestjs/swagger";

export class CreateContractRowDto {
  @ApiProperty({example: 1, description: 'Contract ID'})
  contractId: number;

  @ApiProperty({example: 1, description: 'Article ID'})
  readonly articleId: number;

  @ApiProperty({example: 50, description: 'Article units quantity'})
  readonly quantity: number;

  @ApiProperty({example: 25, description: 'Article units price'})
  readonly price: number;
}

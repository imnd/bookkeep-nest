import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
  @ApiProperty({example: 2, description: 'Region ID'})
  readonly regionId: number;

  @ApiProperty({example: 'Townsend House', description: 'Client title'})
  readonly name: string;

  @ApiProperty({example: 'Townsend St, Townparks, Birr, Co. Offaly, Ireland', description: 'Client address'})
  readonly address: string;
}

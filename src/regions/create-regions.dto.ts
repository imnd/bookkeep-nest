import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionsDto {
  @ApiProperty({example: 'White Chapel', description: 'Region title'})
  readonly name: string;
}

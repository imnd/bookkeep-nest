import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleCategoryDto {
  @ApiProperty({example: 'Apples', description: 'Article category title'})
  readonly name: string;

  @ApiProperty({example: 'kg', description: 'Article category description'})
  readonly description: string;
}

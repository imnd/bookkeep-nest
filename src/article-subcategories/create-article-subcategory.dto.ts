import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleSubcategoryDto {
  @ApiProperty({example: 2, description: 'Category ID'})
  readonly catId: number;

  @ApiProperty({example: 'Apples', description: 'Article subcategory title'})
  readonly name: string;
}

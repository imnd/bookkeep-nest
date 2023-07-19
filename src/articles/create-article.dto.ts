import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
  @ApiProperty({ example: 2, description: "Subcategory ID" })
  readonly subcatId: number;

  @ApiProperty({ example: "Apples Fushi", description: "Article title" })
  readonly name: string;

  @ApiProperty({ example: 245, description: "Price of one article unit" })
  readonly price: number;

  @ApiProperty({ example: "kg", description: "Article unit" })
  readonly unit: string;

  @ApiProperty({ example: true, description: "Is article in list" })
  active: boolean;
}

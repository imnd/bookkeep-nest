import { ApiProperty } from "@nestjs/swagger";

export declare abstract class RowDto {
  @ApiProperty({ example: 1, description: "Parent ID" })
  parentId: number;

  @ApiProperty({ example: 50, description: "Article units quantity" })
  readonly quantity: number;

  @ApiProperty({ example: 25, description: "Article units price" })
  readonly price: number;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreatePurchaseRowDto {
  @ApiProperty({example: 1, description: 'Purchase ID'})
  purchaseId: number;

  @ApiProperty({example: 1, description: 'Article subcategory ID'})
  readonly articleSubcategoryId: number;

  @ApiProperty({example: 50, description: 'Article units quantity'})
  readonly quantity: number;

  @ApiProperty({example: 25, description: 'Article units price'})
  readonly price: number;
}

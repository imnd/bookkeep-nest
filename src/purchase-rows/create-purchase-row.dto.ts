import { ApiProperty } from "@nestjs/swagger";
import { RowDto } from "../share/row.dto";

export class CreatePurchaseRowDto extends RowDto {
  @ApiProperty({ example: 1, description: "Article subcategory ID" })
  readonly articleSubcategoryId: number;
}

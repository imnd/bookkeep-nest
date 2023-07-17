import { ApiProperty } from "@nestjs/swagger";
import { RowDto } from "../share/row.dto";

export class CreateInvoiceRowDto extends RowDto {
  @ApiProperty({ example: 1, description: "Article ID" })
  readonly articleId: number;
}

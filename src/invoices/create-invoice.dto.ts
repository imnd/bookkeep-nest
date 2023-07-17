import { ApiProperty } from "@nestjs/swagger";
import { CreateInvoiceRowDto } from "../invoice-rows/create-invoice-row.dto";

export class CreateInvoiceDto {
  readonly rows: CreateInvoiceRowDto[];

  @ApiProperty({ example: 2, description: "Client ID" })
  readonly clientId: number;

  @ApiProperty({ example: "3663FG36T", description: "Invoice number" })
  readonly invoiceNum: string;

  @ApiProperty({ example: "3663FG36T", description: "Contract number" })
  readonly contractNum: string;

  @ApiProperty({ example: 25, description: "How much money is paid" })
  readonly paid: string;

  @ApiProperty({ example: "2022-11-01", description: "Invoice date" })
  readonly date: string;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreateBankDto {
  @ApiProperty({
    example: 25436567688,
    description: "Bank identification code",
  })
  readonly BIC: number;

  @ApiProperty({ example: "HSBC", description: "Bank title" })
  readonly name: string;

  @ApiProperty({ example: true, description: "Is bank in list" })
  active: boolean;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreateSettingsDto {
  @ApiProperty({example: 'Company bank account number', description: 'Setting name'})
  readonly name: string;

  @ApiProperty({example: 'company_account', description: 'Setting key'})
  readonly key: string;

  @ApiProperty({example: '40804550281007700040', description: 'Setting value'})
  readonly value: string;
}

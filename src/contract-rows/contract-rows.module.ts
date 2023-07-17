import { Module } from '@nestjs/common';
import { ContractRowsService } from "./contract-rows.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { ContractRow } from "./contract-rows.model";

@Module({
  providers: [ContractRowsService],
  imports: [
    SequelizeModule.forFeature([ContractRow])
  ],
  exports: [ContractRowsService]
})
export class ContractRowsModule {}

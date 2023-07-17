import { Module } from '@nestjs/common';
import { ContractsController } from "./contracts.controller";
import { ContractsService } from "./contracts.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Contract } from "./contracts.model";
import { ContractRowsModule } from "../contract-rows/contract-rows.module";

@Module({
  controllers: [ContractsController],
  providers: [ContractsService],
  imports: [
    SequelizeModule.forFeature([Contract]),
    ContractRowsModule
  ]
})
export class ContractsModule {}

import { Module } from '@nestjs/common';
import { PurchasesController } from "./purchases.controller";
import { PurchasesService } from "./purchases.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Purchase } from "./purchases.model";
import { PurchaseRowsModule } from "../purchase-rows/purchase-rows.module";

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService],
  imports: [
    SequelizeModule.forFeature([Purchase]),
    PurchaseRowsModule
  ]
})
export class PurchasesModule {}

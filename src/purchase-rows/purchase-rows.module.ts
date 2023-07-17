import { Module } from '@nestjs/common';
import { PurchaseRowsService } from "./purchase-rows.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { PurchaseRow } from "./purchase-rows.model";

@Module({
  providers: [PurchaseRowsService],
  imports: [
    SequelizeModule.forFeature([PurchaseRow])
  ],
  exports: [PurchaseRowsService]
})
export class PurchaseRowsModule {}
